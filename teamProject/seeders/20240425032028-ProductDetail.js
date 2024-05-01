'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductDetails', [
      {
        id: 100,
        category: "category0",
        detailCategory: "detailCategory0",
        product_id: 100,
      },
      {
        id: 101,
        category: "category1",
        detailCategory: "detailCategory1",
        product_id: 101,
      },
      {
        id: 102,
        category: "category2",
        detailCategory: "detailCategory2",
        product_id: 102,
      },
      {
        id: 103,
        category: "category3",
        detailCategory: "detailCategory3",
        product_id: 103,
      },
      {
        id: 104,
        category: "category4",
        detailCategory: "detailCategory4",
        product_id: 104,
      },
      {
        id: 105,
        category: "category5",
        detailCategory: "detailCategory5",
        product_id: 105,
      },
      {
        id: 106,
        category: "category6",
        detailCategory: "detailCategory6",
        product_id: 106,
      },
      {
        id: 107,
        category: "category7",
        detailCategory: "detailCategory7",
        product_id: 107,
      },
      {
        id: 108,
        category: "category8",
        detailCategory: "detailCategory8",
        product_id: 108,
      },
      {
        id: 109,
        category: "category9",
        detailCategory: "detailCategory9",
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
