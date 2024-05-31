"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DeleteUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING(255),
      },
      password: {
        type: Sequelize.STRING(255),
      },
      gender: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        validate: {
          isIn: [["M", "F"]],
        },
      },
      userName: {
        type: Sequelize.STRING(255),
      },
      email: {
        type: Sequelize.STRING(255),
      },
      phoneNumber: {
        type: Sequelize.STRING(255),
      },
      mainAddress: {
        type: Sequelize.STRING(255),
      },
      detailAddress: {
        type: Sequelize.STRING(255),
      },
      isMaster: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deleteDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DeleteUsers');
  }
};
