'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carrys', [
      {
        id: 100,
        userId: 100,
        progress: "progress0",
        order_id: 100,
      },
      {
        id: 101,
        userId: 101,
        progress: "progress1",
        order_id: 101,
      },
      {
        id: 102,
        userId: 102,
        progress: "progress2",
        order_id: 102,
      },
      {
        id: 103,
        userId: 103,
        progress: "progress3",
        order_id: 103,
      },
      {
        id: 104,
        userId: 104,
        progress: "progress4",
        order_id: 104,
      },
      {
        id: 105,
        userId: 105,
        progress: "progress5",
        order_id: 105,
      },
      {
        id: 106,
        userId: 106,
        progress: "progress6",
        order_id: 106,
      },
      {
        id: 107,
        userId: 107,
        progress: "progress7",
        order_id: 107,
      },
      {
        id: 108,
        userId: 108,
        progress: "progress8",
        order_id: 108,
      },
      {
        id: 109,
        userId: 109,
        progress: "progress9",
        order_id: 109,
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
