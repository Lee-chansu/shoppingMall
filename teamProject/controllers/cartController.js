require("dotenv").config();

//db
const db = require("../models");
const { Cart, BuyList, Product, Carry, PaymentRequest } = db;

//user Id 로 장바구니 조회
exports.selectCartByUserId = async (req, res) => {
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
};

// 유저번호와 상관없이 모든 cart 조회
exports.selectCartAll = async (req, res) => {
  const result = await Cart.findAll();
  res.json(result);
};

//유저별 구매내역 조회
exports.selectBuyListByUserId = async (req, res) => {
  const { user_id } = req.params;
  const result = await BuyList.findAll({
    where: { user_id },
    // include: [ProductOption],
  });
  res.json(result);
  console.log(result)
};

//배송리스트 조회
exports.selectCarryAll = async (req, res) => {
  const result = await Carry.findAll();
  res.json(result);
};

//배송리스트 추가
exports.addCarry = async (req, res) => {
  const { list, user_id, order_id } = req.body;

  const carryStartDate = new Date(list.createdAt);
  carryStartDate.setDate(carryStartDate.getDate() + 3);
  const carryEnd = carryStartDate.toISOString();

  const newCarry = {
    user_id,
    order_id,
    // userName,
    // mainAddress,
    // detailAddress,
    progress: "배송중",
    carryStart: list.createdAt,
    carryEnd,
  };
  const result = await Carry.findOne({
    where: { user_id, order_id },
  });
  // TODO: userName, address 해결해야 함
  // console.log("result", result);
  if (!result) {
    await Carry.create(newCarry);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
};

// 장바구니에 제품 추가
exports.addProductToCart = async (req, res) => {
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
};

// 조회 : get , 추가 : post , 수정 : put , 삭제 : delete
// 구매내역 추가 (cart의 리스트를 payBuyList에 추가)
exports.addBuyList = async (req, res) => {
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
      orderQuantity: val.amount,
      amount: val.amount,
      carryStatus: "도착완료",
      productColor: val.color,
      productSize: val.size,
    };
    try {
      await BuyList.create(newBuyList);
    } catch (error) {
      console.error("구매내역 추가 중 에러 발생", error);
      res.status(500).json({ message: "구매내역 추가 중 에러 발생했습니다" });
    }
  });
  res.json({ message: "결제가 성공적으로 완료되었습니다", success: true });
};

// user Id 별 장바구니 상품삭제
exports.deleteProductFromCartByUserId = async (req, res) => {
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
};

// 장바구니 삭제 기능
exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.destroy({ where: { id } });

    res.status(200).json({ message: "삭제 완료" });
  } catch (error) {
    console.error("삭제 중 에러 발생", error);
    res.status(500).json({ message: "삭제 중 오류가 발생했습니다" });
  }
};

//구매 내역 삭제
exports.deleteBuylist = async (req, res) => {
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
};

// 결제 api 관련
// 결제 요청 조회
exports.paymentRequest = async (req, res) => {
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
};

// 결제 요청 생성
exports.addPaymentRequest = async (req, res) => {
  const newRequest = req.body;
  const { id } = req.body;
  const result = await PaymentRequest.findOne({ where: { id } });
  if (!result) {
    await PaymentRequest.create(newRequest);
    res.json({ result: false });
  } else {
    res.json({ result });
  }
};
// const got = require("got");
let got;

(async () => {
  got = (await import("got")).default;
})();

// TODO: 개발자센터에 로그인해서 내 결제위젯 연동 키 > 시크릿 키를 입력하세요. 시크릿 키는 외부에 공개되면 안돼요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
// const widgetSecretKey = "test_sk_Ba5PzR0ArnPOg9AxQ0oN3vmYnNeD"; // 비지니스용
const widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6"; // 테스트용

exports.tossPaymentRequest = function (req, res) {
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
};
