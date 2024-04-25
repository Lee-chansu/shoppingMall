'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        id: 100,
        name: "name0",
        price: 0,
        detail: "detail0",
        pdstock: 0,
        image: "imageUrl0",
      },
      {
        id: 101,
        name: "name1",
        price: 10000,
        detail: "detail1",
        pdstock: 1,
        image: "imageUrl1",
      },
      {
        id: 102,
        name: "name2",
        price: 20000,
        detail: "detail2",
        pdstock: 2,
        image: "imageUrl2",
      },
      {
        id: 103,
        name: "name3",
        price: 30000,
        detail: "detail3",
        pdstock: 3,
        image: "imageUrl3",
      },
      {
        id: 104,
        name: "name4",
        price: 40000,
        detail: "detail4",
        pdstock: 4,
        image: "imageUrl4",
      },
      {
        id: 105,
        name: "name5",
        price: 50000,
        detail: "detail5",
        pdstock: 5,
        image: "imageUrl5",
      },
      {
        id: 106,
        name: "name6",
        price: 60000,
        detail: "detail6",
        pdstock: 6,
        image: "imageUrl6",
      },
      {
        id: 107,
        name: "name7",
        price: 70000,
        detail: "detail7",
        pdstock: 7,
        image: "imageUrl7",
      },
      {
        id: 108,
        name: "name8",
        price: 80000,
        detail: "detail8",
        pdstock: 8,
        image: "imageUrl8",
      },
      {
        id: 109,
        name: "name9",
        price: 90000,
        detail: "detail9",
        pdstock: 9,
        image: "imageUrl9",
      },
    ], {});

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
