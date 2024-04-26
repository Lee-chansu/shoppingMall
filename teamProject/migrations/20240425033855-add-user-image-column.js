'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'userImage', {
      type : Sequelize.STRING(100)
    });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','userImage');
  }
};
