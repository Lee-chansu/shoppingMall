"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ReviewLists",
      [
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 1,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 2,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 2,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 2,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
        {
          user_id: 100,
          buyList_id: 2,
          content: 1,
          starPoint: 1,
          reviewColor: 0,
          reviewSize: 0,
          reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
