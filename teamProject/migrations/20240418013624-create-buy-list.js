'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BuyLists', {
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
      productName: {
        type: Sequelize.STRING(255)
      },
      category: {
        type: Sequelize.STRING(255)
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(255)
      },
      image: {
        type: Sequelize.STRING(255)
      },
      productColor: {
        type: Sequelize.STRING(255)
      },
      productSize: {
        type: Sequelize.STRING(255)
      },
      buyDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      amount: {
        type: Sequelize.INTEGER
      },
      orderQuantity: {
        type: Sequelize.INTEGER
      },
      carryStatus: {
        type: Sequelize.STRING(255)
      },
      productColor: {
        type: Sequelize.STRING(255),
      },
      productSize: {
        type: Sequelize.STRING(4),
      },
      orderQuantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BuyLists');
  }
};
