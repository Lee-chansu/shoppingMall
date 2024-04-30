'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [
      {
        id: 100,
        user_id: 100,
        productName: "productName0",
        amount: 0,
        price: 0,
      },
      {
        id: 101,
        user_id: 101,
        productName: "productName1",
        amount: 1,
        price: 10000,
      },
      {
        id: 102,
        user_id: 102,
        productName: "productName2",
        amount: 2,
        price: 20000,
      },
      {
        id: 103,
        user_id: 103,
        productName: "productName3",
        amount: 3,
        price: 30000,
      },
      {
        id: 104,
        user_id: 104,
        productName: "productName4",
        amount: 4,
        price: 40000,
      },
      {
        id: 105,
        user_id: 105,
        productName: "productName5",
        amount: 5,
        price: 50000,
      },
      {
        id: 106,
        user_id: 106,
        productName: "productName6",
        amount: 6,
        price: 60000,
      },
      {
        id: 107,
        user_id: 107,
        productName: "productName7",
        amount: 7,
        price: 70000,
      },
      {
        id: 108,
        user_id: 108,
        productName: "productName8",
        amount: 8,
        price: 80000,
      },
      {
        id: 109,
        user_id: 109,
        productName: "productName9",
        amount: 9,
        price: 90000,
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
