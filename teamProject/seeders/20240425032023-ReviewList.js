'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReviewLists', [
      {
        id: 100,
        content: "content0",
        starPoint: 0,
        reviewImage: "reviewImage0",
        product_id: 100,
        user_id: 100,
      },
      {
        id: 101,
        content: "content1",
        starPoint: 1,
        reviewImage: "reviewImage1",
        product_id: 101,
        user_id: 101,
      },
      {
        id: 102,
        content: "content2",
        starPoint: 2,
        reviewImage: "reviewImage2",
        product_id: 102,
        user_id: 102,
      },
      {
        id: 103,
        content: "content3",
        starPoint: 3,
        reviewImage: "reviewImage3",
        product_id: 103,
        user_id: 103,
      },
      {
        id: 104,
        content: "content4",
        starPoint: 4,
        reviewImage: "reviewImage4",
        product_id: 104,
        user_id: 104,
      },
      {
        id: 105,
        content: "content5",
        starPoint: 5,
        reviewImage: "reviewImage5",
        product_id: 105,
        user_id: 105,
      },
      {
        id: 106,
        content: "content6",
        starPoint: 1,
        reviewImage: "reviewImage6",
        product_id: 106,
        user_id: 106,
      },
      {
        id: 107,
        content: "content7",
        starPoint: 2,
        reviewImage: "reviewImage7",
        product_id: 107,
        user_id: 107,
      },
      {
        id: 108,
        content: "content8",
        starPoint: 3,
        reviewImage: "reviewImage8",
        product_id: 108,
        user_id: 108,
      },
      {
        id: 109,
        content: "content9",
        starPoint: 4,
        reviewImage: "reviewImage9",
        product_id: 109,
        user_id: 109,
      },
      {
        id: 110,
        content: "content1-0",
        starPoint: 0,
        reviewImage: "reviewImage1-0",
        product_id: 1,
        user_id: 100,
      },
      {
        id: 111,
        content: "content1-1",
        starPoint: 1,
        reviewImage: "reviewImage1-1",
        product_id: 1,
        user_id: 101,
      },
      {
        id: 112,
        content: "content1-2",
        starPoint: 2,
        reviewImage: "reviewImage1-2",
        product_id: 1,
        user_id: 102,
      },
      {
        id: 113,
        content: "content1-3",
        starPoint: 3,
        reviewImage: "reviewImage1-3",
        product_id: 1,
        user_id: 103,
      },
      {
        id: 114,
        content: "content1-4",
        starPoint: 4,
        reviewImage: "reviewImage1-4",
        product_id: 1,
        user_id: 104,
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
