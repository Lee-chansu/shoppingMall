"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          id: 100,
          user_id: 100,
          productOption_id: 1,
          size: 95,
          color: "파란색",
          amount: 2,
          price: 19000,
        },
        {
          id: 101,
          user_id: 100,
          productOption_id: 2,
          size: 100,
          color: "청색",
          amount: 1,
          price: 12000,
        },
        {
          id: 102,
          user_id: 102,
          productOption_id: 3,
          size: 105,
          color: "블랙",
          amount: 2,
          price: 14000,
        },
        {
          id: 103,
          user_id: 103,
          productOption_id: 4,
          size: 95,
          color: "청색",
          amount: 3,
          price: 36000,
        },
        {
          id: 104,
          user_id: 104,
          productOption_id: 5,
          size: 100,
          color: "블랙",
          amount: 4,
          price: 5000,
        },
        {
          id: 105,
          user_id: 105,
          productOption_id: 6,
          size: 105,
          color: "베이지",
          amount: 5,
          price: 30000,
        },
        {
          id: 106,
          user_id: 106,
          productOption_id: 7,
          size: 95,
          color: "베이지",
          amount: 6,
          price: 200000,
        },
        {
          id: 107,
          user_id: 107,
          productOption_id: 8,
          size: 100,
          color: "화이트",
          amount: 7,
          price: 1000,
        },
        // {
        //   id: 108,
        //   user_id: 108,
        //   productOption_id: 9,
        //   size: 105,
        //   color: "!",
        //   amount: 8,
        // },
        // {
        //   id: 109,
        //   user_id: 109,
        //   productOption_id: 10,
        //   size: 95,
        //   color: "!",
        //   amount: 9,
        // },
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
