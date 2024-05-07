'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductOptions', [
      {
        id: 100,
        productColor: "productColor0",
        productSize: 100,
        productStock: 0,
        product_id: 100,
      },
      {
        id: 101,
        productColor: "productColor1",
        productSize: 101,
        productStock: 1,
        product_id: 101,
      },
      {
        id: 102,
        productColor: "productColor2",
        productSize: 102,
        productStock: 2,
        product_id: 102,
      },
      {
        id: 103,
        productColor: "productColor3",
        productSize: 103,
        productStock: 3,
        product_id: 103,
      },
      {
        id: 104,
        productColor: "productColor4",
        productSize: 104,
        productStock: 4,
        product_id: 104,
      },
      {
        id: 105,
        productColor: "productColor5",
        productSize: 105,
        productStock: 5,
        product_id: 105,
      },
      {
        id: 106,
        productColor: "productColor6",
        productSize: 106,
        productStock: 6,
        product_id: 106,
      },
      {
        id: 107,
        productColor: "productColor7",
        productSize: 107,
        productStock: 7,
        product_id: 107,
      },
      {
        id: 108,
        productColor: "productColor8",
        productSize: 108,
        productStock: 8,
        product_id: 108,
      },
      {
        id: 109,
        productColor: "productColor9",
        productSize: 109,
        productStock: 9,
        product_id: 109,
      },
      {
        id: 10,
        productColor: "파란색",
        productSize: 95,
        productStock: 0,
        product_id: 1,
      },
      {
        id: 11,
        productColor: "파란색",
        productSize: 100,
        productStock: 1,
        product_id: 1,
      },
      {
        id: 12,
        productColor: "파란색",
        productSize: 105,
        productStock: 2,
        product_id: 1,
      },
      {
        id: 13,
        productColor: "회색",
        productSize: 95,
        productStock: 3,
        product_id: 1,
      },
      {
        id: 14,
        productColor: "회색",
        productSize: 100,
        productStock: 4,
        product_id: 1,
      },
      {
        id: 15,
        productColor: "회색",
        productSize: 105,
        productStock: 5,
        product_id: 1,
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
