'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carries', [
      {
        id: 100,
        user_id: 100,
        progress: "progress0",
        order_id: 100,
      },
      {
        id: 101,
        user_id: 101,
        progress: "progress1",
        order_id: 101,
      },
      {
        id: 102,
        user_id: 102,
        progress: "progress2",
        order_id: 102,
      },
      {
        id: 103,
        user_id: 103,
        progress: "progress3",
        order_id: 103,
      },
      {
        id: 104,
        user_id: 104,
        progress: "progress4",
        order_id: 104,
      },
      {
        id: 105,
        user_id: 105,
        progress: "progress5",
        order_id: 105,
      },
      {
        id: 106,
        user_id: 106,
        progress: "progress6",
        order_id: 106,
      },
      {
        id: 107,
        user_id: 107,
        progress: "progress7",
        order_id: 107,
      },
      {
        id: 108,
        user_id: 108,
        progress: "progress8",
        order_id: 108,
      },
      {
        id: 109,
        user_id: 109,
        progress: "progress9",
        order_id: 109,
      },
    ], {order : 2});
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
