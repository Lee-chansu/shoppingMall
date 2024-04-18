'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DeleteUser', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      gender: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        validate: {
          isIn: [['M', 'F']]
        }
      },
      email: {
        type: Sequelize.STRING(255)
      },
      phoneNumber: {
        type: Sequelize.STRING(255)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      isMaster: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      deleteDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DeleteUsers');
  }
};