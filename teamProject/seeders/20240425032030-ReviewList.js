"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ReviewLists",
      [
        {
            id: 1,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
          },
          {
            id: 2,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
          },
          {
            id: 3,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
          },
          {
            id: 4,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
          },
          {
            id: 5,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
          },
          {
            id: 6,
            user_id: 100,
            buyList_id: 101,
            content: 1,
            starPoint: 1,
            reviewColor: 0,
            reviewSize: 0,
            reviewImage: "https://i.ibb.co/NnsMv1S/f910540289d1.png",
        },
      ],
      {order : 1}
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
