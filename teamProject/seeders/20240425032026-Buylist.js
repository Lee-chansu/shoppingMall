"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BuyLists', [
      {
        id: 101,
        product_id: 1,
        productOption_id: 1,
        productName: "productName1",
        category: "category1",
        price: 10001,
        description: "description1",
        image: "image1",
        user_id: 101,
        productColor: "color1",
        productSize: 101,
        orderQuantity: 1,
        amount:2,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 102,
        product_id: 2,
        productOption_id: 2,
        productName: "productName2",
        category: "category2",
        price: 10002,
        description: "description2",
        image: "image2",
        user_id: 102,
        productColor: "color2",
        productSize: 102,
        orderQuantity: 2,
        amount:3,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 103,
        product_id: 3,
        productOption_id: 3,
        productName: "productName3",
        category: "category3",
        price: 10003,
        description: "description3",
        image: "image3",
        user_id: 103,
        productColor: "color3",
        productSize: 103,
        orderQuantity: 3,
        amount:1,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 104,
        product_id: 4,
        productOption_id: 4,
        productName: "productName4",
        category: "category4",
        price: 10004,
        description: "description4",
        image: "image4",
        user_id: 104,
        productColor: "color4",
        productSize: 104,
        orderQuantity: 4,
        amount:2,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 105,
        product_id: 5,
        productOption_id: 5,
        productName: "productName5",
        category: "category5",
        price: 10005,
        description: "description5",
        image: "image5",
        user_id: 105,
        productColor: "color5",
        productSize: "XL",
        orderQuantity: 5,
        amount:3,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 106,
        product_id: 6,
        productOption_id: 6,
        productName: "productName6",
        category: "category6",
        price: 10006,
        description: "description6",
        image: "image6",
        user_id: 106,
        productColor: "color6",
        productSize: 106,
        orderQuantity: 6,
        amount:1,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 107,
        product_id: 7,
        productOption_id: 7,
        productName: "productName7",
        category: "category7",
        price: 10007,
        description: "description7",
        image: "image7",
        user_id: 107,
        productColor: "color7",
        productSize: 107,
        orderQuantity: 7,
        amount:2,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 108,
        product_id: 8,
        productOption_id: 8,
        productName: "productName8",
        category: "category8",
        price: 10008,
        description: "description8",
        image: "image8",
        user_id: 108,
        productColor: "color8",
        productSize: 108,
        orderQuantity: 8,
        amount:3,
        isReviewed: false,
        carryStatus: '도착완료'
      },
      {
        id: 109,
        product_id: 9,
        productOption_id: 9,
        productName: "productName9",
        category: "category9",
        price: 10009,
        description: "description9",
        image: "image9",
        user_id: 109,
        productColor: "color9",
        productSize: 109,
        orderQuantity: 9,
        amount:1,
        isReviewed: false,
        carryStatus: '도착완료'
      },
    ], {order : 1});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
