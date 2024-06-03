"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductDetails",
      [
        { id: 1, product_id: 1, category: "상의", detailCategory: "티셔츠" },
        { id: 2, product_id: 2, category: "상의", detailCategory: "반팔" },
        { id: 3, product_id: 3, category: "악세사리", detailCategory: "기타" },
        { id: 4, product_id: 4, category: "하의", detailCategory: "청바지" },
        {
          id: 5,
          product_id: 5,
          category: "악세사리",
          detailCategory: "기타",
        },
        { id: 6, product_id: 6, category: "하의", detailCategory: "반바지" },
        { id: 7, product_id: 7, category: "아우터", detailCategory: "자켓" },
        { id: 8, product_id: 8, category: "악세사리", detailCategory: "양말" },
        { id: 9, product_id: 9, category: "상의", detailCategory: "긴팔" },
        {
          id: 10,
          category: "아우터",
          detailCategory: "블레이저",
          product_id: 10,
        },
        {
          id: 11,
          category: "상의",
          detailCategory: "반팔",
          product_id: 11,
        },
        {
          id: 12,
          category: "신발",
          detailCategory: "샌들/슬리퍼",
          product_id: 12,
        },
        {
          id: 13,
          category: "신발",
          detailCategory: "운동화/단화",
          product_id: 13,
        },
        {
          id: 14,
          category: "하의",
          detailCategory: "슬랙스",
          product_id: 14,
        },
        {
          id: 15,
          category: "하의",
          detailCategory: "반바지",
          product_id: 15,
        },
        {
          id: 16,
          category: "하의",
          detailCategory: "카고바지",
          product_id: 16,
        },
        {
          id: 17,
          category: "신발",
          detailCategory: "운동화/단화",
          product_id: 17,
        },
        {
          id: 18,
          category: "상의",
          detailCategory: "니트",
          product_id: 18,
        },
        {
          id: 19,
          category: "아우터",
          detailCategory: "가디건",
          product_id: 19,
        },
        {
          id: 20,
          category: "아우터",
          detailCategory: "코트",
          product_id: 20,
        },
      ],
      {}
    );
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
