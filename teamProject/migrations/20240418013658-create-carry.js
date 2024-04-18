'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carry', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BuyList',
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
    await queryInterface.dropTable('Carry');
  }
};
