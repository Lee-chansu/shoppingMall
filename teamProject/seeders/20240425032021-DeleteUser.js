'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DeleteUsers', [
      {
        id: 100,
        userId: "userId0",
        password: '1234',
        gender: "M",
        userName: "userName0",
        email: "email0@naver.com",
        phoneNumber: "0",
        address: "address0",
        isMaster: false
      },
      {
        id: 101,
        userId: "userId1",
        password: '1234',
        gender: "M",
        userName: "userName1",
        email: "email1@naver.com",
        phoneNumber: "1",
        address: "address1",
        isMaster: false
      },
      {
        id: 102,
        userId: "userId2",
        password: '1234',
        gender: "M",
        userName: "userName2",
        email: "email2@naver.com",
        phoneNumber: "2",
        address: "address2",
        isMaster: false
      },
      {
        id: 103,
        userId: "userId3",
        password: '1234',
        gender: "M",
        userName: "userName3",
        email: "email3@naver.com",
        phoneNumber: "3",
        address: "address3",
        isMaster: false
      },
      {
        id: 104,
        userId: "userId4",
        password: '1234',
        gender: "M",
        userName: "userName4",
        email: "email4@naver.com",
        phoneNumber: "4",
        address: "address4",
        isMaster: false
      },
      {
        id: 105,
        userId: "userId5",
        password: '1234',
        gender: "F",
        userName: "userName5",
        email: "email5@naver.com",
        phoneNumber: "5",
        address: "address5",
        isMaster: false
      },
      {
        id: 106,
        userId: "userId6",
        password: '1234',
        gender: "F",
        userName: "userName6",
        email: "email6@naver.com",
        phoneNumber: "6",
        address: "address6",
        isMaster: false
      },
      {
        id: 107,
        userId: "userId7",
        password: '1234',
        gender: "F",
        userName: "userName7",
        email: "email7@naver.com",
        phoneNumber: "7",
        address: "address7",
        isMaster: false
      },
      {
        id: 108,
        userId: "userId8",
        password: '1234',
        gender: "F",
        userName: "userName8",
        email: "email8@naver.com",
        phoneNumber: "8",
        address: "address8",
        isMaster: false
      },
      {
        id: 109,
        userId: "userId9",
        password: '1234',
        gender: "F",
        userName: "userName9",
        email: "email9@naver.com",
        phoneNumber: "9",
        address: "address9",
        isMaster: false
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
