'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      order_id: {
        type: Sequelize.STRING(40),
      },
      mainAddress: {
        type: Sequelize.STRING(100)
      },
      detailAddress: {
        type: Sequelize.STRING(100)
      },
      carryMessage: {
        type: Sequelize.STRING(100)
      },
      progress: {
        type: Sequelize.STRING(30)
      },
      carryStart: {
        type: Sequelize.DATE
      },
      carryEnd: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carries');
  }
};
