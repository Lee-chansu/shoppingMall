'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
    {
      id: 4,
      userId: "userId",
      password: "asdfasd",
      gender: "A",
      email: "tjgr@asdf.asdf",
      phoneNumber: "123123123",
      address: "address",
      isMaster: false,
    }
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










