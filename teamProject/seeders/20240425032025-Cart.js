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
          product_id: 1,
          amount: 2,
        },
        {
          id: 101,
          user_id: 100,
          product_id: 2,
          amount: 1,
        },
        {
          id: 102,
          user_id: 102,
          product_id: 3,
          amount: 2,
        },
        {
          id: 103,
          user_id: 103,
          product_id: 4,
          amount: 3,
        },
        {
          id: 104,
          user_id: 104,
          product_id: 5,
          amount: 4,
        },
        {
          id: 105,
          user_id: 105,
          product_id: 6,
          amount: 5,
        },
        {
          id: 106,
          user_id: 106,
          product_id: 7,
          amount: 6,
        },
        {
          id: 107,
          user_id: 107,
          product_id: 8,
          amount: 7,
        },
        // {
        //   id: 108,
        //   user_id: 108,
        //   product_id: 9,
        //   amount: 8,
        // },
        // {
        //   id: 109,
        //   user_id: 109,
        //   product_id: 10,
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
