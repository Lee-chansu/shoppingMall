require("dotenv").config();
//db
const db = require("../models");
const { Product, ProductOption, ProductDetail, Cart, ReviewList } = db;

//imgbb 활용할 때 쓸 키
//env에 넣고 쓸 수 없어 여기에 적어둬야 할듯...
const imgbbKey = "41be9bc26229e3df57a9818ed955b889";
const imgbbUploader = require("imgbb-uploader");

//nav바 버튼에 따라 카테고리별 제품 조회
exports.loadProductByNavButton = async (req, res) => {
  const { category, detail } = req.query;
  console.log(detail);
  let result;
  try {
    if (detail) {
      result = await ProductDetail.findAll({
        include: [Product],
        where: {
          detailCategory: detail,
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
      category: productDetail.category,
      detail: productDetail.detailCategory,
    };
    res.json(result);
  } else {
    res.json({});
  }
};

//옵션들 전부 조회.
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

//detail 조회
exports.selectProductDetailAll = async (req, res) => {
  const result = await ProductDetail.findAll();
  res.json(result);
};

// 제품 추가
exports.addProduct = async (req, res) => {
  const { newProduct, newOption } = req.body;
  const base64Images = [
    newProduct.mainImage.split(",")[1],
    newProduct.subImage1 ? newProduct.subImage1.split(",")[1] : null,
    newProduct.subImage2 ? newProduct.subImage2.split(",")[1] : null,
    newProduct.subImage3 ? newProduct.subImage3.split(",")[1] : null,
  ];
  let result;
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
};

//제품 정보 수정
exports.updateProduct = async (req, res) => {
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
};

//제품 삭제
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const cartDel = await Cart.destroy({ where: { product_id: id } });
  const optionDel = await ProductOption.destroy({ where: { product_id: id } });
  const detailDel = await ProductDetail.destroy({ where: { product_id: id } });
  let result;
  if (cartDel && detailDel && optionDel) {
    await Product.destroy({ where: { id } });
    result = true;
  } else {
    result = false;
  }
  res.json(result);
};

//제품 리뷰 조회
exports.selectReviewlist = async (req, res) => {
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
};
