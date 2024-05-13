"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductOptions",
      [
        {
          id: 100,
          color: "color0",
          size: "L",
          stock: 0,
          product_id: 100,
        },
        {
          id: 101,
          color: "color1",
          size: 101,
          stock: 1,
          product_id: 101,
        },
        {
          id: 102,
          color: "color2",
          size: 102,
          stock: 2,
          product_id: 102,
        },
        {
          id: 103,
          color: "color3",
          size: 103,
          stock: 3,
          product_id: 103,
        },
        {
          id: 104,
          color: "color4",
          size: 104,
          stock: 4,
          product_id: 104,
        },
        {
          id: 105,
          color: "color5",
          size: "XL",
          stock: 5,
          product_id: 105,
        },
        {
          id: 106,
          color: "color6",
          size: 106,
          stock: 6,
          product_id: 106,
        },
        {
          id: 107,
          color: "color7",
          size: 107,
          stock: 7,
          product_id: 107,
        },
        {
          id: 108,
          color: "color8",
          size: 108,
          stock: 8,
          product_id: 108,
        },
        {
          id: 109,
          color: "color9",
          size: 109,
          stock: 9,
          product_id: 109,
        },
        {
          id: 11,
          color: "파란색",
          size: "M",
          stock: 0,
          product_id: 1,
        },
        {
          id: 12,
          color: "파란색",
          size: "L",
          stock: 1,
          product_id: 1,
        },
        {
          id: 13,
          color: "파란색",
          size: "XL",
          stock: 2,
          product_id: 1,
        },
        {
          id: 14,
          color: "회색",
          size: "M",
          stock: 3,
          product_id: 1,
        },
        {
          id: 15,
          color: "회색",
          size: "L",
          stock: 4,
          product_id: 1,
        },
        {
          id: 16,
          color: "회색",
          size: "XL",
          stock: 5,
          product_id: 1,
        },
        {
          id: 1,
          product_id: 1,
          color: "베이직",
          size: "XL",
          stock: 99,
        },
        {
          id: 2,
          product_id: 2,
          color: "청색",
          size: "XL",
          stock: 99,
        },

        {
          id: 3,
          product_id: 3,
          color: "블랙",
          size: "XL",
          stock: 99,
        },
        {
          id: 4,
          product_id: 4,
          color: "청색",
          size: "XL",
          stock: 99,
        },
        {
          id: 5,
          product_id: 5,
          color: "블랙",
          size: "XL",
          stock: 99,
        },
        {
          id: 6,
          product_id: 6,
          color: "베이지",
          size: "XL",
          stock: 99,
        },

        {
          id: 7,
          product_id: 7,
          color: "베이지",
          size: "XL",
          stock: 99,
        },
        {
          id: 8,
          product_id: 8,
          color: "화이트",
          size: "XL",
          stock: 99,
        },
        {
          id: 9,
          product_id: 2,
          color: "흑청",
          size: "XL",
          stock: 99,
        },
        {
          id: 10,
          product_id: 6,
          color: "블랙",
          size: "XL",
          stock: 99,
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
