'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StarPoints', [
      {
        id: 101,
        starPoint: 1,
        review_id: 101,
        user_id: 101,
      },
      {
        id: 102,
        starPoint: 2,
        review_id: 102,
        user_id: 102,
      },
      {
        id: 103,
        starPoint: 3,
        review_id: 103,
        user_id: 103,
      },
      {
        id: 104,
        starPoint: 4,
        review_id: 104,
        user_id: 104,
      },
      {
        id: 105,
        starPoint: 5,
        review_id: 105,
        user_id: 105,
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
