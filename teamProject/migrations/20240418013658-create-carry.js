'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carrys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BuyLists',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING(15)
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
    await queryInterface.dropTable('Carrys');
  }
};
