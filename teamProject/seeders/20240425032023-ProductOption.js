"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductOptions",
      [
        {
          product_id: 1,
          color: "베이직",
          size: "XL",
          stock: 99,
        },
        {
          product_id: 1,
          color: "베이직",
          size: "S",
          stock: 99,
        },
        {
          product_id: 1,
          color: "베이직",
          size: "M",
          stock: 10,
        },
        {
          product_id: 1,
          color: "네이비",
          size: "XL",
          stock: 99,
        },
        {
          product_id: 1,
          color: "블랙",
          size: "S",
          stock: 1,
        },
        {
          product_id: 1,
          color: "블랙",
          size: "S",
          stock: 1,
        },
        {
          product_id: 2,
          color: "화이트",
          size: "Free",
          stock: 999,
        },
        {
          product_id: 3,
          color: "블랙",
          size: "acc",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "XS",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "S",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "M",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "L",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "XL",
          stock: 999,
        },
        {
          product_id: 4,
          color: "청색",
          size: "XXL",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "XS",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "S",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "M",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "L",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "XL",
          stock: 999,
        },
        {
          product_id: 4,
          color: "흑색",
          size: "XXL",
          stock: 999,
        },
        {
          product_id: 5,
          color: "흑색",
          size: "acc",
          stock: 20,
        },
        {
          product_id: 5,
          color: "살구색",
          size: "acc",
          stock: 20,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "XS",
          stock: 100,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "S",
          stock: 100,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "M",
          stock: 100,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "L",
          stock: 100,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "XL",
          stock: 100,
        },
        {
          product_id: 6,
          color: "베이지",
          size: "XXL",
          stock: 100,
        },
        {
          product_id: 7,
          color: "연녹색",
          size: "Free",
          stock: 90,
        },
        {
          product_id: 8,
          color: "화이트",
          size: "acc",
          stock: 90,
        },
        {
          product_id: 8,
          color: "화이트",
          size: "acc",
          stock: 90,
        },
        {
          product_id: 9,
          color: "네이비",
          size: "Free",
          stock: 150,
        },
        {
          product_id: 10,
          color: "블랙",
          size: "Free",
          stock: 150,
        },
        {
          product_id: 11,
          color: "화이트",
          size: "Free",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "230",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "235",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "240",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "245",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "250",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "255",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "260",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "265",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "270",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "275",
          stock: 150,
        },
        {
          product_id: 12,
          color: "화이트",
          size: "280",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "230",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "235",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "240",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "245",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "250",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "255",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "260",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "265",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "270",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "275",
          stock: 150,
        },
        {
          product_id: 12,
          color: "블랙",
          size: "280",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "230",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "235",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "240",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "245",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "250",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "255",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "260",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "265",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "270",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "275",
          stock: 150,
        },
        {
          product_id: 13,
          color: "네이비",
          size: "280",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "230",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "235",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "240",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "245",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "250",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "255",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "260",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "265",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "270",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "275",
          stock: 150,
        },
        {
          product_id: 13,
          color: "연청색",
          size: "280",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "230",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "235",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "240",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "245",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "250",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "255",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "260",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "265",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "270",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "275",
          stock: 150,
        },
        {
          product_id: 13,
          color: "진청색",
          size: "280",
          stock: 150,
        },
        {
          product_id: 14,
          color: "진청색",
          size: "280",
          stock: 150,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "XS",
          stock: 50,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "S",
          stock: 50,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "M",
          stock: 50,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "L",
          stock: 50,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "XL",
          stock: 50,
        },
        {
          product_id: 14,
          color: "화이트",
          size: "XXL",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "XS",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "S",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "M",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "L",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "XL",
          stock: 50,
        },
        {
          product_id: 14,
          color: "블랙",
          size: "XXL",
          stock: 50,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "XS",
          stock: 60,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "S",
          stock: 60,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "M",
          stock: 60,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "L",
          stock: 60,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "XL",
          stock: 60,
        },
        {
          product_id: 15,
          color: "블랙",
          size: "XXL",
          stock: 60,
        },

        { product_id: 16, color: "네이비", size: "XS", stock: 65 },
        { product_id: 16, color: "네이비", size: "S", stock: 65 },
        { product_id: 16, color: "네이비", size: "M", stock: 65 },
        { product_id: 16, color: "네이비", size: "L", stock: 65 },
        { product_id: 16, color: "네이비", size: "XL", stock: 65 },
        { product_id: 16, color: "네이비", size: "XXL", stock: 65 },
        { product_id: 16, color: "베이지", size: "XS", stock: 65 },
        { product_id: 16, color: "베이지", size: "S", stock: 65 },
        { product_id: 16, color: "베이지", size: "M", stock: 65 },
        { product_id: 16, color: "베이지", size: "L", stock: 65 },
        { product_id: 16, color: "베이지", size: "XL", stock: 65 },
        { product_id: 16, color: "베이지", size: "XXL", stock: 65 },
        { product_id: 17, color: "블랙", size: "230", stock: 50 },
        { product_id: 17, color: "블랙", size: "235", stock: 50 },
        { product_id: 17, color: "블랙", size: "240", stock: 50 },
        { product_id: 17, color: "블랙", size: "245", stock: 50 },
        { product_id: 17, color: "블랙", size: "250", stock: 50 },
        { product_id: 17, color: "블랙", size: "255", stock: 50 },
        { product_id: 17, color: "블랙", size: "260", stock: 50 },
        { product_id: 17, color: "블랙", size: "265", stock: 50 },
        { product_id: 17, color: "블랙", size: "270", stock: 50 },
        { product_id: 17, color: "블랙", size: "275", stock: 50 },
        { product_id: 17, color: "블랙", size: "280", stock: 50 },
        { product_id: 18, color: "베이지", size: "XS", stock: 70 },
        { product_id: 18, color: "베이지", size: "S", stock: 70 },
        { product_id: 18, color: "베이지", size: "M", stock: 70 },
        { product_id: 18, color: "베이지", size: "L", stock: 70 },
        { product_id: 18, color: "베이지", size: "XL", stock: 70 },
        { product_id: 18, color: "베이지", size: "XXL", stock: 70 },
        { product_id: 18, color: "연청색", size: "XS", stock: 70 },
        { product_id: 18, color: "연청색", size: "S", stock: 70 },
        { product_id: 18, color: "연청색", size: "M", stock: 70 },
        { product_id: 18, color: "연청색", size: "L", stock: 70 },
        { product_id: 18, color: "연청색", size: "XL", stock: 70 },
        { product_id: 18, color: "연청색", size: "XXL", stock: 70 },
        { product_id: 18, color: "연녹색", size: "XS", stock: 70 },
        { product_id: 18, color: "연녹색", size: "S", stock: 70 },
        { product_id: 18, color: "연녹색", size: "M", stock: 70 },
        { product_id: 18, color: "연녹색", size: "L", stock: 70 },
        { product_id: 18, color: "연녹색", size: "XL", stock: 70 },
        { product_id: 18, color: "연녹색", size: "XXL", stock: 70 },
        { product_id: 19, color: "핑크", size: "Free", stock: 99 },
        { product_id: 19, color: "레드", size: "Free", stock: 99 },
        { product_id: 19, color: "베이지", size: "Free", stock: 99 },
        { product_id: 19, color: "말차", size: "Free", stock: 99 },
        { product_id: 20, color: "블랙", size: "Free", stock: 9 },
        { product_id: 20, color: "타로", size: "Free", stock: 99 },
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
