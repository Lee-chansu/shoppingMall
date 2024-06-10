require("dotenv").config();
const { Op } = require("sequelize");

//db
const db = require("../models");
const { Product, ProductOption, ProductDetail, Cart, ReviewList, BuyList } = db;

//imgbb 활용할 때 쓸 키
//env에 넣고 쓸 수 없어 여기에 적어둬야 할듯...
const imgbbKey = "41be9bc26229e3df57a9818ed955b889";
const imgbbUploader = require("imgbb-uploader");

//category, detail 버튼에 따라 카테고리별 제품 조회
exports.loadProductByNavButton = async (req, res) => {
  const { category, detail } = req.query;
  let offset, limit;
  if (req.query.offset && req.query.limit) {
    offset = parseInt(req.query.offset);
    limit = parseInt(req.query.limit);
  } else {
    offset = 0;
    limit = 8;
  }

  let result;
  try {
    if (detail) {
      result = await ProductDetail.findAndCountAll({
        include: [Product],
        where: {
          detailCategory: detail,
        },
        offset,
        limit,
      });
    } else {
      if (category) {
        result = await ProductDetail.findAndCountAll({
          include: [Product],
          where: {
            category: category,
          },
          offset,
          limit,
        });
      } else {
        result = await Product.findAndCountAll({
          offset,
          limit,
        });
      }
    }
    res.json(result);
  } catch (error) {
    console.log("데이터 조회 중 오류 발생 : ", error);
  }
};

// 제품의 상세옵션 조회
exports.loadProductOne = async (req, res) => {
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
      description: product.description,
      category: productDetail.category,
      detail: productDetail.detailCategory,
    };
    res.json(result);
  } else {
    res.json({});
  }
};

//옵션 전부 조회
exports.selectProductOptionAll = async (req, res) => {
  const result = await ProductOption.findAll();
  res.json(result);
};

//해당 제품의 옵션들 조회
exports.loadProductOption = async (req, res) => {
  const { id } = req.params;
  const result = await ProductOption.findAll({
    where: { product_id: id },
    include: Product,
    // limit: 10,
  });
  res.json(result);
};

//productDetail 조회
exports.selectProductDetailAll = async (req, res) => {
  const result = await ProductDetail.findAll();
  res.json(result);
};

// 제품 추가
exports.addProduct = async (req, res) => {
  const { newProduct, newOption, descriptionImgArray } = req.body;
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

    let index = 0;
    for (let img of descriptionImgArray) {
      options = {
        apiKey: imgbbKey,
        base64string: img.split(",")[1],
      };
      if (options.base64string) {
        const uploadResponse = await imgbbUploader(options);
        newProduct.description += uploadResponse.url + ",";
        index++;
      } else {
        newProduct.description += ",";
        index++;
      }
    }

    let result;
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
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json((result = false));
  }
};

//제품 정보 수정
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { newProduct, newOption, option } = req.body;
  const base64Images = [
    newProduct.mainImage.includes("https")
      ? newProduct.mainImage
      : newProduct.mainImage.split(",")[1],
    newProduct.subImage1
      ? newProduct.subImage1.includes("https")
        ? newProduct.subImage1
        : newProduct.subImage1.split(",")[1]
      : null,
    newProduct.subImage2
      ? newProduct.subImage2.includes("https")
        ? newProduct.subImage2
        : newProduct.subImage2.split(",")[1]
      : null,
    newProduct.subImage3
      ? newProduct.subImage3.includes("https")
        ? newProduct.subImage3
        : newProduct.subImage3.split(",")[1]
      : null,
  ];
  let options;
  let productImage = [];
  let idx = 0;
  for (let img of base64Images) {
    console.log(img);
    if (img && !img.includes("https")) {
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
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json((result = false));
  }
};

// 제품 옵션 수정
exports.updateProductOption = async (req, res) => {
  const option = req.body;

  try {
    const updatePromises = option.map(async item => {
      return ProductOption.update(
        { stock: item.stock },
        { where: { id: item.id } }
      );
    });

    await Promise.all(updatePromises);

    res.json({ success: true, message: "제품 옵션 재고 업데이트 성공" });
  } catch (error) {
    console.error("제품 옵션 재고 업데이트 중 에러 발생", error);
    res.status(500).json({ message: "제품 옵션 재고 업데이트 실패" });
  }
};

//제품 삭제
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Cart.destroy({ where: { product_id: id } });
  await ProductOption.destroy({ where: { product_id: id } });
  await ProductDetail.destroy({ where: { product_id: id } });
  const delProduct = await Product.destroy({ where: { id } });
  let result;
  if (delProduct) {
    result = true;
  } else {
    result = false;
  }
  res.json(result);
};

//제품 리뷰 조회
exports.selectReviewlist = async (req, res) => {
  const { buyList_id } = req.query;
  let offset, limit;
  if (req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query.limit) {
    limit = parseInt(req.query.limit);
  }

  const findId = await BuyList.findAll({ where: { product_id: buyList_id } });

  const buyListIds = findId.map(item => item.id);

  let result = [];

  if (buyListIds.length > 0) {
    result = await ReviewList.findAndCountAll({
      where: {
        buyList_id: {
          [Op.in]: buyListIds,
        },
      },
      offset,
      limit,
    });
  }

  if (result) {
    res.json(result);
  } else {
    res.json([]);
  }
};

// 리뷰 등록
exports.addReview = async (req, res) => {
  const { addReview } = req.body;

  if (addReview) {
    if (addReview.reviewImage) {
      const options = {
        apiKey: imgbbKey,
        base64string: addReview.reviewImage.split(",")[1],
      };
      const uploadResponse = await imgbbUploader(options);
      addReview.reviewImage = uploadResponse.url;
      await ReviewList.create(addReview); // 리뷰테이블

      const buyList = await BuyList.findOne({
        where: { id: addReview.buyList_id },
      }); // 리뷰등록성공하면 구매내역테이블 isReviewed 값변경
      if (buyList) {
        buyList.isReviewed = true;
        await buyList.save();
      }
      res.send("success");
    } else {
      await ReviewList.create(addReview);
      const buyList = await BuyList.findOne({
        where: { id: addReview.buyList_id },
      });
      if (buyList) {
        buyList.isReviewed = true;
        await buyList.save();
      }
      res.send("success");
    }
  } else {
    res.status(500).send({ message: "제품 옵션 재고 업데이트 실패" });
  }
};

// 리뷰수정페이지에서 기존 리뷰정보 받아오기
exports.loadReviewForEdit = async (req, res) => {
  const { buyList_id } = req.params;

  const result = await ReviewList.findOne({ where: { buyList_id } });
  if (result) {
    res.json(result);
  } else {
    res.send({ message: "실패" });
  }
};

// 리뷰수정
exports.ReviewEdit = async (req, res) => {
  const { buyList_id } = req.params;
  const { editReview } = req.body;

  const options = {
    apiKey: imgbbKey,
    base64string: editReview.reviewImage.split(",")[1],
  };

  const result = await ReviewList.findOne({ where: { buyList_id } });

  if (result) {
    for (let key in editReview) {
      result[key] = editReview[key];
    }
    if (options.base64string) {
      const uploadResponse = await imgbbUploader(options);
      result.reviewImage = uploadResponse.url;
    }
    await result.save();
    res.send({ message: "성공" });
  }
};
