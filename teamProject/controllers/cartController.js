require("dotenv").config();

//db
const db = require("../models");
const { Cart, BuyList, Product, ProductOption, Carry } = db;

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
    include: [ProductOption],
  });
  res.json(result);
};

//배송리스트 조회
exports.selectCarryAll = async (req, res) => {
  const result = await Carry.findAll();
  res.json(result);
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
