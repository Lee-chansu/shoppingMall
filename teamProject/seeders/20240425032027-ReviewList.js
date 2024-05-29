"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ReviewLists", [{
      // id: 1,
      // user_id:100,
      // buyList_id: 110,
      // content: 1,
      // starPoint:1,
      // reviewColor:0,
      // reviewSize: 0,
    }], {});
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
