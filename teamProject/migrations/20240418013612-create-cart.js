"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Carts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
      },
      size: {
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING(40),
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Carts");
  },
};
