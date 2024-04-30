/* eslint-disable no-undef */
// 모듈
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config();
const { email_service, admin, pass } = process.env; // env 파일 데이터가져오기

const session = require("express-session");
const passport = require("passport");
const MySQLStore = require("express-mysql-session")(session);
const LocalStrategy = require("passport-local");

const dbOption = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "1234",
  database: "teamproject1",
};

const sessionOption = {
  secret: "1234",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 1000 },
  store: new MySQLStore(dbOption),
};
// 토큰 비밀번호
const JWT_SECRET_KEY = "!@#123";
// 난수생성용모듈
const crypto = require("crypto");

//db
const db = require("./models");
const { User, Product, ProductDetail, ProductOption } = db;

//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(session(sessionOption));
app.use(passport.session());

//api
app.listen(5000, () => {
  console.log("접속성공 - http://localhost:5000");
});

// 회원가입
app.post("/join", async (req, res) => {
  const newUser = req.body;
  const { userId } = req.body;
  const result = await User.findOne({ where: { userId } });
  if (!result) {
    await User.create(newUser);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
});

// 로그인검증
passport.use(
  new LocalStrategy(async (userId, password, done) => {
    let result = await User.findOne({ where: { userId } });

    if (!result) {
      return done(null, false, { message: "이메일이 일치하지않습니다" });
    }
    if (result.password != password) {
      return done(null, false, { message: "비밀번호가 일치하지않습니다" });
    } else {
      return done(null, result);
    }
  })
);

// 세션생성
passport.serializeUser((user, done) => {
  process.nextTick(() => {
    console.log("serializeUser");
    done(null, { id: user.id, userId: user.userId });
  });
});

// 세션검사
passport.deserializeUser(async (user, done) => {
  let result = await User.findOne({ where: { id: user.id } });

  if (result) {
    const loginUserInfo = {
      id: result.id,
      userId: result.userId,
    };
    process.nextTick(() => {
      return done(null, loginUserInfo);
    });
  }
});

// 로그아웃
app.get("/logout", (req, res) => {
  req.logOut();
  //
});

// 로그인
app.post("/login", (req, res) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(401).json(info.message);

    req.logIn(user, (err) => {
      if (err) return next(err);
      const token = jwt.sign(
        { id: user.id, userId: user.userId },
        JWT_SECRET_KEY
      );
      res.json({ token, user });
    });
  })(req, res);
});

// 메인화면
app.get("/", async (req, res) => {
  const result = await Product.findAll();
  res.json(result);
});

// 유저프로필
app.get("/userProfile/:id", async (req, res) => {
  const { id } = req.params;
  const result = await User.findOne({ where: { id } });
  if (result) {
    res.json(result);
  }
});

//제품 추가 페이지
app.post("/addProduct", async (req, res) => {
  const { category, detail, color, size, stock, ...rest } = req.body;
  const newProduct = { ...rest, pdstock: stock, detail: detail };

  let result;
  try {
    const product = await Product.create(newProduct);
    const { id } = await Product.findOne({
      order: [["id", "DESC"]],
      limit: 1,
    });
    const newProductDetail = {
      product_id: id,
      category,
      detailCategory: detail,
    };
    const newProductOption = {
      product_id: id,
      productName: rest.name,
      productColor: color,
      productSize: size,
      productStock: stock,
    };

    const productDetail = await ProductDetail.create(newProductDetail);
    const productOption = await ProductOption.create(newProductOption);

    if (!product || !productDetail || !productOption) {
      result = false;
    } else {
      result = true;
    }
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json((result = false));
  }
});

// 각 화면들

app.get("/User", async (req, res) => {
  const result = await User.findAll();
  res.json(result);
});

app.get("/DeleteUser", async (req, res) => {
  const result = await DeleteUser.findAll();
  res.json(result);
});

app.get("/Product", async (req, res) => {
  const result = await Product.findAll();
  res.json(result);
});

app.get("/ReviewList", async (req, res) => {
  const result = await ReviewList.findAll();
  res.json(result);
});

app.get("/StarPoint", async (req, res) => {
  const result = await StarPoint.findAll();
  res.json(result);
});

app.get("/Cart", async (req, res) => {
  const result = await Cart.findAll();
  res.json(result);
});

app.get("/BuyList", async (req, res) => {
  const result = await BuyList.findAll();
  res.json(result);
});

app.get("/ProductOption", async (req, res) => {
  const result = await ProductOption.findAll();
  res.json(result);
});

app.get("/ProductDetail", async (req, res) => {
  const result = await ProductDetail.findAll();
  res.json(result);
});

app.get("/Carry", async (req, res) => {
  const result = await Carry.findAll();
  res.json(result);
});

// 유저프로필
app.get("/userProfile/:id", async (req, res) => {
  const { id } = req.params;
  const result = await User.findOne({ where: { id } });
  if (result) {
    res.json(result);
  }
});
// 유저수정페이지
app.get("/userEdit/:id", async (req, res) => {
  const { id } = req.params;
  const result = await User.findOne({ where: { id } });
  if (result) {
    res.json(result);
  }
});

// 유저수정기능
app.put("/userEdit/:id", async (req, res) => {
  const { id } = req.params;
  const editUser = req.body;
  const result = await User.findOne({ where: { id } });
  if (result) {
    for (let key in editUser) {
      result[key] = editUser[key];
    }
    await result.save();
    res.json(result);
  }
});

// 비밀번호체크
app.post("/passwordCheck/:id", async (req, res) => {
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
});

// 이메일 인증을 위한 호출

const transporter = nodemailer.createTransport({
  // 이메일 설정
  service: email_service, // naver smtp 사용한다는 기능 / service 로 'naver' 정해두면 port 와 host 생략가능
  auth: {
    user: admin, // 작성자 이메일
    pass: pass, // 비밀번호
  },
});

// 아이디찾기
app.post("/findId", async (req, res) => {
  const { userName, email } = req.body;
  const result = await User.findOne({ where: { userName, email } });
  let passNum;
  if (result) {
    const randombyte = crypto.randomBytes(3);
    const randomNumber = randombyte.toString("hex");
    passNum = randomNumber;
    const mailOptions = {
      // 이메일 발신자/수신자/내용 설정
      from: admin, // 작성자
      to: email, // 수신자
      subject: "@@쇼핑몰에서 인증번호를 보냅니다", //제목
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
});

// 비밀번호찾기
app.post("/findPassword", async (req, res) => {
  const { userId, email } = req.body;
  const result = await User.findOne({ where: { userId, email } });
  let passNum;
  if (result) {
    const randombyte = crypto.randomBytes(3);
    const randomNumber = randombyte.toString("hex");
    passNum = randomNumber;
    const mailOptions = {
      // 이메일 발신자/수신자/내용 설정
      from: admin, // 작성자
      to: email, // 수신자
      subject: "@@쇼핑몰에서 인증번호를 보냅니다", //제목
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
    res.json({ message: true, passNum, password: result.password });
  } else {
    res.json({ msessage: false });
  }
});
