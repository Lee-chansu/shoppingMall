'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      gender: {
        type: Sequelize.CHAR(1),
        validate: {
          isIn: [['M', 'F']]
        }
      },
      userName: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      isMaster: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};