/* eslint-disable no-undef */
// 모듈
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
passportConfig();
const MySQLStore = require("express-mysql-session")(session);

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
  console.log(`접속성공 - http://localhost:` + process.env.PORT);
});

app.use("/", require("./router"));

// 메인화면
app.get("/", async (req, res) => {
  const result = await Product.findAll();
  res.json(result);
});

// nav 카테고리 별 제품리스트조회
// app.get("/product", async (req, res) => {
//   const { category, detail } = req.query;
//   let result;
//   try {
//     if (detail) {
//       result = await ProductDetail.findAll({
//         include: [Product],
//         where: {
//           detail: detail,
//         },
//       });
//     } else {
//       if (category) {
//         result = await ProductDetail.findAll({
//           include: [Product],
//           where: {
//             category: category,
//           },
//         });
//       } else {
//         result = await Product.findAll();
//       }
//     }
//     res.json(result);
//   } catch (error) {
//     console.log("데이터 조회 중 오류 발생 : ", error);
//   }
// });

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
// app.get("/cart/:user_id", async (req, res) => {
//   const { user_id } = req.params;

//   try {
//     const result = await Cart.findAll({
//       where: { user_id },
//       include: [{ model: Product }], // Product 모app.post("/cart델을 include하여 조인
//     });

//     if (result) {
//       res.json(result);
//       console.log(result);
//     } else {
//       res.status(404).json({ message: "Cart not found for the user." });
//     }
//   } catch (error) {
//     console.error("Error fetching cart:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// 장바구니에 제품 추가
// app.post("/cart", async (req, res) => {
//   const newProduct = req.body;
//   const { user_id, productOption_id, product_id, size, color, amount } =
//     req.body;
//   const result = await Cart.findOne({
//     where: { user_id, productOption_id, size, color },
//   });
//   // console.log("result", result);
//   if (!result) {
//     await Cart.create(newProduct);
//     res.json({ result: false });
//   } else {
//     res.json({ result });
//   }
// });

// 유저번호와 상관없이 모든 cart 조회
// app.get("/cart", async (req, res) => {
//   const result = await Cart.findAll();
//   res.json(result);
// });

// user Id 별 장바구니 상품삭제
// app.delete("/cart", async (req, res) => {
//   // const { user_id } = req.params;
//   const { list, user_id } = req.body;
//   console.log("list", list);
//   console.log("user_id", user_id);

//   try {
//     await list.forEach((val) => {
//       Cart.destroy({
//         where: {
//           productOption_id: val.productOption_id,
//         },
//       });
//     });
//   } catch (error) {
//     console.error("삭제 중 에러 발생", error);
//     res
//       .status(500)
//       .json({ message: "삭제 중 오류가 발생했습니다", success: false });
//   }
//   res.status(200).json({ message: "삭제 완료", success: true });
// });

//유저별 구매내역 조회
// app.get("/buyList/:user_id", async (req, res) => {
//   const { user_id } = req.params;
//   const result = await BuyList.findAll({
//     where: { user_id },
//     include: [ProductOption],
//   });
//   res.json(result);
// });

// 장바구니 삭제 기능
// app.delete("/cart/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Cart.destroy({ where: { id } });

//     res.status(200).json({ message: "삭제 완료" });
//   } catch (error) {
//     console.error("삭제 중 에러 발생", error);
//     res.status(500).json({ message: "삭제 중 오류가 발생했습니다" });
//   }
// });

// 구매 내역 삭제
// app.delete("/buyList/delete/:id", async (req, res) => {
//   //여기서 가져오는 data 뭔지?
//   const { id } = req.params;
//   try {
//     await Carry.destroy({ where: { order_id: id } });
//     //이거 왜 Carry?
//     await BuyList.destroy({ where: { id } });

//     res.status(200).json({ message: "삭제 완료" });
//   } catch (error) {
//     console.error("삭제 중 에러 발생", error);
//     res.status(500).json({ message: "삭제 중 오류가 발생했습니다" });
//   }
// });

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


app.get("/carry", async (req, res) => {
  const result = await Carry.findAll();
  res.json(result);
});

// 결제 요청 조회
app.get("/paymentRequest", async (req, res) => {
  const { orderId, amount, paymentKey } = req.query;

  console.log(orderId, amount);

  if (!orderId || !amount) {
    res.json([{ isValid: false }]);
  }

  try {
    const result = await PaymentRequest.findAll({
      where: { id: orderId, amount },
    });
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json([{ isValid: false }]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
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
// const widgetSecretKey = "test_sk_Ba5PzR0ArnPOg9AxQ0oN3vmYnNeD"; // 비지니스용
const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6"; // 테스트용

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
