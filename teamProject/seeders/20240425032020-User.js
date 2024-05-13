'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 100,
        userId: "userId0",
        password: '1234',
        gender: "M",
        userName: "userName0",
        email: "email0@naver.com",
        phoneNumber: "0",
        address: "address0",
        profileImg: "profileImg0",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg1",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg2",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg3",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg4",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg5",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg6",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg7",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg8",
        isMaster: false,
        isDeleted: false
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
        profileImg: "profileImg9",
        isMaster: false,
        isDeleted: false
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
