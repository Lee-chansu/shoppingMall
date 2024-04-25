'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductOptions', [
      {
        id: 100,
        productName: "productName0",
        productColor: "productColor0",
        productSize: 100,
        productStock: 0,
        product_id: 100,
      },
      {
        id: 101,
        productName: "productName1",
        productColor: "productColor1",
        productSize: 101,
        productStock: 1,
        product_id: 101,
      },
      {
        id: 102,
        productName: "productName2",
        productColor: "productColor2",
        productSize: 102,
        productStock: 2,
        product_id: 102,
      },
      {
        id: 103,
        productName: "productName3",
        productColor: "productColor3",
        productSize: 103,
        productStock: 3,
        product_id: 103,
      },
      {
        id: 104,
        productName: "productName4",
        productColor: "productColor4",
        productSize: 104,
        productStock: 4,
        product_id: 104,
      },
      {
        id: 105,
        productName: "productName5",
        productColor: "productColor5",
        productSize: 105,
        productStock: 5,
        product_id: 105,
      },
      {
        id: 106,
        productName: "productName6",
        productColor: "productColor6",
        productSize: 106,
        productStock: 6,
        product_id: 106,
      },
      {
        id: 107,
        productName: "productName7",
        productColor: "productColor7",
        productSize: 107,
        productStock: 7,
        product_id: 107,
      },
      {
        id: 108,
        productName: "productName8",
        productColor: "productColor8",
        productSize: 108,
        productStock: 8,
        product_id: 108,
      },
      {
        id: 109,
        productName: "productName9",
        productColor: "productColor9",
        productSize: 109,
        productStock: 9,
        product_id: 109,
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
