require("dotenv").config();
const passport = require("passport");
const cron = require("node-cron");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

//db
const db = require("../models");
const { User, DeleteUser, ReviewList, Cart, BuyList, Carry } = db;

//imgbb 활용할 때 쓸 키
//env에 넣고 쓸 수 없어 여기에 적어둬야 할듯...
const imgbbKey = "41be9bc26229e3df57a9818ed955b889";
const imgbbUploader = require("imgbb-uploader");

//토큰 시크릿 키
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

//이메일 발송 시 보내는 admin 아이디와 비밀번호
const { email_service, email_admin, email_password } = process.env; // env 파일 데이터가져오기

//유저 정보 불러오기
exports.loadUser = async (req, res) => {
  const result = await User.findAll();
  res.json(result);
};

exports.loadDeleteUser = async (req, res) => {
  const result = await DeleteUser.findAll();
  res.json(result);
};

// 회원 기간만료후 물리적삭제
cron.schedule =
  ("0 0 * * *",
  async () => {
    console.log("매 정각마다 스케줄링이 실행됩니다");

    const today = new Date();
    const delUser = await DeleteUser.findAll();
    if (delUser) {
      delUser.forEach(async (e) => {
        if (today > e.deleteDate) {
          await DeleteUser.destroy({ where: { deleteDate: e.deleteDate } });
          await Carry.destroy({ where: { user_id: e.user_id } });
          await BuyList.destroy({ where: { user_id: e.user_id } });
          await ReviewList.destroy({ where: { user_id: e.user_id } });
          await Cart.destroy({ where: { user_id: e.user_id } });
          await User.destroy({ where: { id: e.user_id } });
        }
      });
    }
  });

//유저프로필 이미지 불러오기
exports.loadProfileImage = async (req, res) => {
  const { id } = req.params;
  const { profileImg } = await User.findOne({ where: { id } });
  res.json(profileImg);
};

// 회원가입
exports.userCreate = async (req, res) => {
  const newUser = req.body;
  const { userId } = req.body;
  const result = await User.findOne({ where: { userId } });
  if (!result) {
    await User.create(newUser);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
};

//로그인
exports.userLogin = (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(401).json(info.message);

    req.logIn(user, (err) => {
      if (err) return next(err);

      const token = jwt.sign(
        { id: user.id, userId: user.userId, profileImg: user.profileImg },
        JWT_SECRET_KEY
      );
      res.json({ token, user });
    });
  })(req, res);
};

//로그아웃
exports.logout = (req, res) => {
  req.logOut();
};

exports.loadUserForEdit = async (req, res) => {
  const { id } = req.params;
  const result = await User.findOne({ where: { id } });
  if (result) {
    res.json(result);
  }
};

// 유저수정기능
exports.userInfoUpdate = async (req, res) => {
  const { id } = req.params;
  const editUser = req.body;

  const options = {
    apiKey: imgbbKey,
    base64string: editUser.profileImg.split(",")[1],
  };

  let result = await User.findOne({ where: { id } });

  if (result) {
    for (let key in editUser) {
      result[key] = editUser[key];
    }

    if (options.base64string) {
      const uploadResponse = await imgbbUploader(options);
      result.profileImg = uploadResponse.url;
      console.log("url", uploadResponse.url);
    }

    await result.save();
    res.json(result);
  }
};

// 비밀번호체크
exports.passwordCheck = async (req, res) => {
  const { id } = req.params;
  const typeingpassword = req.body;
  const result = await User.findOne({ where: { id } });
  if (result) {
    if (result.password == typeingpassword.password) {
      res.json();
    } else {
      res.status(401).json({ message: "비밀번호가 일치하지 않습니다" });
    }
  }
};

// 이메일 인증을 위한 호출
const transporter = nodemailer.createTransport({
  // 이메일 설정
  service: email_service, // naver smtp 사용한다는 기능 / service 로 'naver' 정해두면 port 와 host 생략가능
  auth: {
    user: email_admin, // 작성자 이메일
    pass: email_password, // 비밀번호
    method: "PLAIN",
  },
});

// 아이디찾기
exports.findId = async (req, res) => {
  const { userName, email } = req.body;
  const result = await User.findOne({ where: { userName, email } });
  let passNum;
  if (result) {
    const randombyte = crypto.randomBytes(3);
    const randomNumber = randombyte.toString("hex");
    passNum = randomNumber;
    const mailOptions = {
      // 이메일 발신자/수신자/내용 설정
      from: email_admin, // 작성자
      to: email, // 수신자
      subject: "Pick&Fit에서 인증번호를 보냅니다", //제목
      text: `인증번호 : ${randomNumber}`, // 내용
    };
    transporter.sendMail(mailOptions, (error, info) => {
      // 이메일 보내기
      if (error) {
        console.log(error);
      } else {
        console.log("인증번호발송 성공");
      }
    });
    res.json({ message: true, passNum, userId: result.userId });
  } else {
    res.json({ msessage: false });
  }
};

// 비밀번호찾기
exports.findPassword = async (req, res) => {
  const { userId, email } = req.body;
  const result = await User.findOne({ where: { userId, email } });
  let passNum;
  if (result) {
    const randombyte = crypto.randomBytes(3);
    const randomNumber = randombyte.toString("hex");
    passNum = randomNumber;
    const mailOptions = {
      // 이메일 발신자/수신자/내용 설정
      from: email_admin, // 작성자
      to: email, // 수신자
      subject: "Pick&Fit에서 인증번호를 보냅니다", //제목
      text: `인증번호 : ${randomNumber}`, // 내용
    };
    transporter.sendMail(mailOptions, (error, info) => {
      // 이메일 보내기
      if (error) {
        console.log(error);
      } else {
        console.log("인증번호발송 성공");
      }
    });
    res.json({ message: true, passNum, findUser: result.id });
  } else {
    res.json({ msessage: false });
  }
};

// 비밀번호변경
exports.updatedPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const result = await User.findOne({ where: { id } });
  if (result) {
    result.password = password;
    await result.save();
    res.json({ message: "비밀번호 변경성공" });
  }
};

// 회원탈퇴
exports.deletedUser = async (req, res) => {
  const { id } = req.params;
  const result = await User.findOne({ where: { id } });
  if (result) {
    result.isDeleted = true; // 논리적삭제
    await result.save();
    res.send({ message: "삭제성공" });

    const deleteDate = new Date();
    deleteDate.setDate(deleteDate.getDate() + 30); // 물리적삭제 날짜기간정함

    await DeleteUser.create({
      user_id: result.id,
      userId: result.userId,
      password: result.password,
      gender: result.gender,
      userName: result.userName,
      email: result.email,
      phoneNumber: result.phoneNumber,
      address: result.address,
      isMaster: result.isMaster,
      deleteDate: deleteDate,
    });
  } else {
    res.status(404).send({ message: "db와 일치하지않음" });
  }
};

// 유저인포 사진보기용
exports.loadProfileImageForInfo = async (req, res) => {
  const { id } = req.params;

  const result = await User.findOne({ where: { id } });

  if (result) {
    res.json({ data: result.profileImg });
  }
};
