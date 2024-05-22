/* eslint-disable no-undef */
// 모듈
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

const nodemailer = require("nodemailer");
require("dotenv").config();
const { email_service, email_admin, email_password } = process.env; // env 파일 데이터가져오기

// 스케줄링
const cron = require("node-cron");
// 회원 기간만료후 물리적삭제
cron.schedule("0 0 * * *", async () => {
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

//imgbb 활용할 때 쓸 키
const imgbbKey = "41be9bc26229e3df57a9818ed955b889";

const imgbbUploader = require("imgbb-uploader");

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
const {
  User,
  DeleteUser,
  ReviewList,
  Cart,
  BuyList,
  Product,
  ProductOption,
  ProductDetail,
  Carry,
  PaymentRequest,
} = db;

//미들웨어
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

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
    }
    if (result.isDeleted) {
      return done(null, false, { message: "휴면 계정입니다" });
    } else {
      return done(null, result);
    }
  })
);

// 세션생성
passport.serializeUser((user, done) => {
  process.nextTick(() => {
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
});

// 로그인
app.post("/login", (req, res) => {
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
});

// 메인화면
app.get("/", async (req, res) => {
  const result = await Product.findAll();
  res.json(result);
});

//유저프로필 이미지 불러오기
app.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const { profileImg } = await User.findOne({ where: { id } });

  res.json(profileImg);
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
  const { newProduct, newOption } = req.body;
  const base64Images = [
    newProduct.mainImage.split(",")[1],
    newProduct.subImage1 ? newProduct.subImage1.split(",")[1] : null,
    newProduct.subImage2 ? newProduct.subImage2.split(",")[1] : null,
    newProduct.subImage3 ? newProduct.subImage3.split(",")[1] : null,
  ];
  try {
    let options;
    let productImage = [];
    let idx = 0;
    for (let img of base64Images) {
      options = {
        apiKey: imgbbKey,
        base64string: img,
      };
      if (options.base64string) {
        const uploadResponse = await imgbbUploader(options);
        productImage[idx] = uploadResponse.url;
        idx++;
      } else {
        productImage[idx] = "";
        idx++;
      }
    }
    newProduct.mainImage = productImage[0];
    newProduct.subImage1 = productImage[1];
    newProduct.subImage2 = productImage[2];
    newProduct.subImage3 = productImage[3];
    const product = await Product.create(newProduct);
    const { id } = await Product.findOne({
      order: [["id", "DESC"]],
      limit: 1,
    });
    const newProductDetail = {
      product_id: id,
      category: newProduct.category,
      detailCategory: newProduct.detail,
    };
    const productDetail = await ProductDetail.create(newProductDetail);
    let newProductOption, productOption;
    for (let i = 0; i < newOption.length; i++) {
      newProductOption = {
        color: newOption[i].color,
        size: newOption[i].size,
        stock: newOption[i].stock,
        product_id: id,
      };
      productOption = await ProductOption.create(newProductOption);
      if (!productOption) {
        return;
      }
    }
    if (!product || !productDetail || !productOption) {
      result = false;
    } else {
      result = true;
    }
    // console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json((result = false));
  }
});

//제품 수정
app.put("/productEdit/:id", async (req, res) => {
  const { id } = req.params;
  const { newProduct, newOption, option } = req.body;
  const base64Images = [
    newProduct.mainImage.split(",")[1],
    newProduct.subImage1 ? newProduct.subImage1.split(",")[1] : null,
    newProduct.subImage2 ? newProduct.subImage2.split(",")[1] : null,
    newProduct.subImage3 ? newProduct.subImage3.split(",")[1] : null,
  ];
  let options;
  let productImage = [];
  let idx = 0;
  for (let img of base64Images) {
    options = {
      apiKey: imgbbKey,
      base64string: img,
    };
    if (options.base64string) {
      const uploadResponse = await imgbbUploader(options);
      productImage[idx] = uploadResponse.url;
      idx++;
    } else {
      productImage[idx] = "";
      idx++;
    }
  }
  newProduct.mainImage = productImage[0];
  newProduct.subImage1 = productImage[1];
  newProduct.subImage2 = productImage[2];
  newProduct.subImage3 = productImage[3];

  const newProductDetail = {
    category: newProduct.category,
    detailCategory: newProduct.detail,
  };

  let result;
  try {
    const product = await Product.update({ ...newProduct }, { where: { id } });

    const productDetail = await ProductDetail.update(
      { ...newProductDetail },
      {
        where: { product_id: id },
      }
    );
    const productOption = await ProductOption.update(
      { ...option },
      {
        where: {
          product_id: id,
          ...option,
        },
      }
    );
    if (newOption) {
      let newProductOption;
      let optionBox;
      for (let i = 0; i < newOption.length; i++) {
        optionBox = {
          product_id: id,
          color: newOption[i].color,
          size: newOption[i].size,
          stock: newOption[i].stock,
        };
        newProductOption = await ProductOption.create(optionBox);
        if (!newProductOption) {
          result = false;
          return;
        }
      }
    }

    if (!product || !productDetail || !productOption) {
      result = false;
    } else {
      result = true;
    }
    // console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json((result = false));
  }
});

// 제품 삭제
app.delete("/productDelete/:id", async (req, res) => {
  const { id } = req.params;
  const cartDel = await Cart.destroy({ where: { product_id: id } });
  const optionDel = await ProductOption.destroy({ where: { product_id: id } });
  const detailDel = await ProductDetail.destroy({ where: { product_id: id } });
  let result;
  if (detailDel && optionDel) {
    await Product.destroy({ where: { id } });
    result = true;
  } else {
    result = false;
  }
  res.json(result);
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

// 제품 상세 조회
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { id } });
  const productDetail = await ProductDetail.findOne({
    where: { product_id: id },
  });

  if (product) {
    let result = [];
    result = {
      id: product.id,
      name: product.name,
      price: product.price,
      mainImage: product.mainImage,
      subImage1: product.subImage1,
      subImage2: product.subImage2,
      subImage3: product.subImage3,
      category: productDetail.category,
      detail: productDetail.detailCategory,
    };
    res.json(result);
  } else {
    res.json({});
  }
});

//원본
// app.get("/product", async (req, res) => {
//   const result = await Product.findAll();
//   res.json(result);
// });

// nav 카테고리 별 제품리스트조회
app.get("/product", async (req, res) => {
  const { category, detail } = req.query;
  let result;
  try {
    if (detail) {
      result = await ProductDetail.findAll({
        include: [Product],
        where: {
          detail: detail,
        },
      });
    } else {
      if (category) {
        result = await ProductDetail.findAll({
          include: [Product],
          where: {
            category: category,
          },
        });
      } else {
        result = await Product.findAll();
      }
    }
    res.json(result);
  } catch (error) {
    console.log("데이터 조회 중 오류 발생 : ", error);
  }
});

// 리뷰 리스트 조회
app.get("/ReviewList", async (req, res) => {
  const { productOption_id } = req.query;
  let result = await ReviewList.findAll({ where: {} });
  if (productOption_id)
    result = await ReviewList.findAll({ where: { productOption_id } });
  // console.log(result);
  if (result) {
    res.json(result);
  } else {
    res.json([]);
  }
});

// app.get("/ReviewList", async (req, res) => {
//   const result = await ReviewList.findAll();
//   res.json(result);
// });

//user Id 로 장바구니 조회
app.get("/cart/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const result = await Cart.findAll({
      where: { user_id },
      include: [{ model: Product }], // Product 모app.post("/cart델을 include하여 조인
    });

    if (result) {
      res.json(result);
      console.log(result);
    } else {
      res.status(404).json({ message: "Cart not found for the user." });
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// 장바구니에 제품 추가
app.post("/cart", async (req, res) => {
  const newProduct = req.body;
  const { user_id, productOption_id, product_id, size, color, amount } =
    req.body;
  const result = await Cart.findOne({
    where: { user_id, productOption_id, size, color },
  });
  // console.log("result", result);
  if (!result) {
    await Cart.create(newProduct);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
});

// 유저번호와 상관없이 모든 cart 조회
app.get("/cart", async (req, res) => {
  const result = await Cart.findAll();
  res.json(result);
});

// user Id 별 장바구니 상품삭제
app.delete("/cart", async (req, res) => {
  // const { user_id } = req.params;
  const { list, user_id } = req.body;
  console.log("list", list);
  console.log("user_id", user_id);

  try {
    await list.forEach((val) => {
      Cart.destroy({
        where: {
          productOption_id: val.productOption_id,
        },
      });
    });
  } catch (error) {
    console.error("삭제 중 에러 발생", error);
    res
      .status(500)
      .json({ message: "삭제 중 오류가 발생했습니다", success: false });
  }
  res.status(200).json({ message: "삭제 완료", success: true });
});

//유저별 구매내역 조회
app.get("/buyList/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const result = await BuyList.findAll({
    where: { user_id },
    include: [ProductOption],
  });
  res.json(result);
});

// 장바구니 삭제 기능
app.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({ where: { id } });

    res.status(200).json({ message: "삭제 완료" });
  } catch (error) {
    console.error("삭제 중 에러 발생", error);
    res.status(500).json({ message: "삭제 중 오류가 발생했습니다" });
  }
});

// 구매 내역 삭제
app.delete("/buyList/delete/:id", async (req, res) => {
  //여기서 가져오는 data 뭔지?
  const { id } = req.params;
  try {
    await Carry.destroy({ where: { order_id: id } });
    //이거 왜 Carry?
    await BuyList.destroy({ where: { id } });

    res.status(200).json({ message: "삭제 완료" });
  } catch (error) {
    console.error("삭제 중 에러 발생", error);
    res.status(500).json({ message: "삭제 중 오류가 발생했습니다" });
  }
});

// 조회 : get , 추가 : post , 수정 : put , 삭제 : delete
// 구매내역 추가 (cart의 리스트를 payBuyList에 추가)
app.post("/buyList", async (req, res) => {
  const { list, user_id } = req.body;
  console.log(list);

  list.forEach(async (val, idx) => {
    const newBuyList = {
      user_id,
      productOption_id: val.id,
      productName: val.name,
      category: val.category ? val.category : "x",
      price: val.price,
      description: val.description ? val.description : "x",
      image: val.mainImage,
      amount: val.amount,
      carryStatus: "도착완료",
    };
    try {
      await BuyList.create(newBuyList);
    } catch (error) {
      console.error("구매내역 추가 중 에러 발생", error);
      res.status(500).json({ message: "구매내역 추가 중 에러 발생했습니다" });
    }
  });
  res.json({ message: "결제가 성공적으로 완료되었습니다", success: true });
});

app.get("/productOption", async (req, res) => {
  const result = await ProductOption.findAll();
  res.json(result);
});

app.get("/productOption/:id", async (req, res) => {
  const { id } = req.params;
  const result = await ProductOption.findAll({
    where: { product_id: id },
    include: Product,
    // limit: 10,
  });
  res.json(result);
});

app.get("/productDetail", async (req, res) => {
  const result = await ProductDetail.findAll();
  res.json(result);
});

app.get("/carry", async (req, res) => {
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
    user: email_admin, // 작성자 이메일
    pass: email_password, // 비밀번호
    method: "PLAIN",
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
      from: email_admin, // 작성자
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
      from: email_admin, // 작성자
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
    res.json({ message: true, passNum, findUser: result.id });
  } else {
    res.json({ msessage: false });
  }
});

// 비밀번호변경
app.put("/passwordEdit/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const result = await User.findOne({ where: { id } });
  if (result) {
    result.password = password;
    await result.save();
    res.json({ message: "비밀번호 변경성공" });
  }
});

// 회원탈퇴
app.put("/userinfo/put/:id", async (req, res) => {
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
});

// 유저인포 사진보기용
app.get("/userinfo/:id", async (req, res) => {
  const { id } = req.params;

  const result = await User.findOne({ where: { id } });

  if (result) {
    res.json({ data: result.profileImg });
  }
});
// 결제 요청 생성
app.post("/paymentRequest", async (req, res) => {
  const newRequest = req.body;
  const { id } = req.body;
  const result = await PaymentRequest.findOne({ where: { id } });
  if (!result) {
    await PaymentRequest.create(newRequest);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
});

// 결제 api 관련
// const got = require("got");
let got;

(async () => {
  got = (await import("got")).default;
})();

// TODO: 개발자센터에 로그인해서 내 결제위젯 연동 키 > 시크릿 키를 입력하세요. 시크릿 키는 외부에 공개되면 안돼요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const widgetSecretKey = "test_sk_Ba5PzR0ArnPOg9AxQ0oN3vmYnNeD";

app.post("/confirm", function (req, res) {
  const { paymentKey, orderId, amount } = req.body;

  // 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
  // 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
  // @docs https://docs.tosspayments.com/reference/using-api/authorization#%EC%9D%B8%EC%A6%9D
  const encryptedSecretKey =
    "Basic " + Buffer.from(widgetSecretKey + ":").toString("base64");

  // 결제 승인 API를 호출하세요.
  // 결제를 승인하면 결제수단에서 금액이 차감돼요.
  // @docs https://docs.tosspayments.com/guides/payment-widget/integration#3-결제-승인하기
  got
    .post("https://api.tosspayments.com/v1/payments/confirm", {
      headers: {
        Authorization: encryptedSecretKey,
        "Content-Type": "application/json",
      },
      json: {
        orderId: orderId,
        amount: amount,
        paymentKey: paymentKey,
      },
      responseType: "json",
    })
    .then(function (response) {
      // TODO: 결제 완료 비즈니스 로직을 구현하세요.
      console.log(response.body);
      res.status(response.statusCode).json(response.body);
    })
    .catch(function (error) {
      // TODO: 결제 실패 비즈니스 로직을 구현하세요.
      console.log(error.response.body);
      res.status(error.response.statusCode).json(error.response.body);
    });
});
