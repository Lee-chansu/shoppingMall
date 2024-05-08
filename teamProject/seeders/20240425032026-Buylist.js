'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BuyLists', [
      {
        id: 99,
        productName: "productName10",
        category: "category10",
        price: 20000,
        description: "description10",
        pdstock: 0,
        image: "image10",
        user_id: 100,
        product_id: 100,
        amount:1,
        carryStatus: '배송완료'
      },
      {
        id: 100,
        productName: "productName0",
        category: "category0",
        price: 10000,
        description: "description0",
        pdstock: 0,
        image: "image0",
        user_id: 100,
        product_id: 100,
        amount:1,
        carryStatus: '배송중'
      },
      {
        id: 101,
        productName: "productName1",
        category: "category1",
        price: 10001,
        description: "description1",
        pdstock: 1,
        image: "image1",
        user_id: 101,
        product_id: 101,
        amount:2,
        carryStatus: '도착완료'
      },
      {
        id: 102,
        productName: "productName2",
        category: "category2",
        price: 10002,
        description: "description2",
        pdstock: 2,
        image: "image2",
        user_id: 102,
        product_id: 102,
        amount:3,
        carryStatus: '도착완료'
      },
      {
        id: 103,
        productName: "productName3",
        category: "category3",
        price: 10003,
        description: "description3",
        pdstock: 3,
        image: "image3",
        user_id: 103,
        product_id: 103,
        amount:1,
        carryStatus: '도착완료'
      },
      {
        id: 104,
        productName: "productName4",
        category: "category4",
        price: 10004,
        description: "description4",
        pdstock: 4,
        image: "image4",
        user_id: 104,
        product_id: 104,
        amount:2,
        carryStatus: '도착완료'
      },
      {
        id: 105,
        productName: "productName5",
        category: "category5",
        price: 10005,
        description: "description5",
        pdstock: 5,
        image: "image5",
        user_id: 105,
        product_id: 105,
        amount:3,
        carryStatus: '도착완료'
      },
      {
        id: 106,
        productName: "productName6",
        category: "category6",
        price: 10006,
        description: "description6",
        pdstock: 6,
        image: "image6",
        user_id: 106,
        product_id: 106,
        amount:1,
        carryStatus: '도착완료'
      },
      {
        id: 107,
        productName: "productName7",
        category: "category7",
        price: 10007,
        description: "description7",
        pdstock: 7,
        image: "image7",
        user_id: 107,
        product_id: 107,
        amount:2,
        carryStatus: '도착완료'
      },
      {
        id: 108,
        productName: "productName8",
        category: "category8",
        price: 10008,
        description: "description8",
        pdstock: 8,
        image: "image8",
        user_id: 108,
        product_id: 108,
        amount:3,
        carryStatus: '도착완료'
      },
      {
        id: 109,
        productName: "productName9",
        category: "category9",
        price: 10009,
        description: "description9",
        pdstock: 9,
        image: "image9",
        user_id: 109,
        product_id: 109,
        amount:1,
        carryStatus: '도착완료'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
