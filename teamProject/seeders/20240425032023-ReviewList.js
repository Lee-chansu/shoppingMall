'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReviewLists', [
      {
        id: 100,
        content: "content0",
        reviewImage: "reviewImage0",
        product_id: 100,
        user_id: 100,
      },
      {
        id: 101,
        content: "content1",
        reviewImage: "reviewImage1",
        product_id: 101,
        user_id: 101,
      },
      {
        id: 102,
        content: "content2",
        reviewImage: "reviewImage2",
        product_id: 102,
        user_id: 102,
      },
      {
        id: 103,
        content: "content3",
        reviewImage: "reviewImage3",
        product_id: 103,
        user_id: 103,
      },
      {
        id: 104,
        content: "content4",
        reviewImage: "reviewImage4",
        product_id: 104,
        user_id: 104,
      },
      {
        id: 105,
        content: "content5",
        reviewImage: "reviewImage5",
        product_id: 105,
        user_id: 105,
      },
      {
        id: 106,
        content: "content6",
        reviewImage: "reviewImage6",
        product_id: 106,
        user_id: 106,
      },
      {
        id: 107,
        content: "content7",
        reviewImage: "reviewImage7",
        product_id: 107,
        user_id: 107,
      },
      // {
      //   id: 108,
      //   content: "content8",
      //   reviewImage: "reviewImage8",
      //   product_id: 108,
      //   user_id: 108,
      // },
      // {
      //   id: 109,
      //   content: "content9",
      //   reviewImage: "reviewImage9",
      //   product_id: 109,
      //   user_id: 109,
      // },
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
