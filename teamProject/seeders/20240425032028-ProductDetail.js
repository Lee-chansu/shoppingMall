"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductDetails",
      [
        { id: 1, 
          product_id: 1, 
          category: "상의" ,
          detailCategory : "티셔츠"
        },
        { id: 2, 
          product_id: 2, 
          category: "하의" ,
          detailCategory : "청바지"
        },
        { id: 3, 
          product_id: 3, 
          category: "악세사리" ,
          detailCategory : "벨트"
        },
        { id: 4, 
          product_id: 4, 
          category: "상의" ,
          detailCategory : "블라우스"
        },
        { id: 5, 
          product_id: 5, 
          category: "악세사리" ,
          detailCategory : "선글라스"
        },
        { id: 6, 
          product_id: 6, 
          category: "하의" ,
          detailCategory : "반바지"
        },
        { id: 7, 
          product_id: 7, 
          category: "아우터" ,
          detailCategory : "코트"
        },
        { id: 8, 
          product_id: 8, 
          category: "악세사리" ,
          detailCategory : "양말"
        },
        {
          id: 100,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 100,
        },
        {
          id: 101,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 101,
        },
        {
          id: 102,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 102,
        },
        {
          id: 103,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 103,
        },
        {
          id: 104,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 104,
        },
        {
          id: 105,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 105,
        },
        {
          id: 106,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 106,
        },
        {
          id: 107,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 107,
        },
        {
          id: 108,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 108,
        },
        {
          id: 109,
          category: "상의",
          detailCategory: "티셔츠",
          product_id: 109,
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
