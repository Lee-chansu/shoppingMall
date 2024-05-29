"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ReviewLists", {
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
      buyList_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "BuyLists",
          key: "id",
        },
      },
      content: {
        type: Sequelize.STRING(255),
      },
      starPoint: {
        type: Sequelize.INTEGER(1),
      },
      reviewColor: {
        type: Sequelize.STRING(255),
      },
      reviewSize: {
        type: Sequelize.STRING(255),
      },
      reviewImage: {
        type: Sequelize.STRING(255),
      },
      reviewDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ReviewLists");
  },
};
