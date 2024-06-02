"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BuyLists",
      [
        {
          product_id: 1,
          productOption_id: 1,
          productName: "여름 필수템 베이직 무지 티셔츠",
          category: "상의",
          price: 10001,
          description: "description1",
          image:
            "https://static.lookpin.co.kr/20240311035645-7646/1a45c4510e274c2683b1090baf35c4d4.jpg?resize=450",
          user_id: 101,
          productColor: "네이비",
          productSize: "XL",
          orderQuantity: 1,
          amount: 2,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 2,
          productOption_id: 7,
          productName: "반팔티 화이트",
          category: "상의",
          price: 10002,
          description: "...",
          image:
            "https://static.lookpin.co.kr/20230222081140-83d8/ec6583471ddfeb9f84f06ce9be330351.jpg?resize=450",
          user_id: 102,
          productColor: "연녹색",
          productSize: "Free",
          orderQuantity: 2,
          amount: 3,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 3,
          productOption_id: 8,
          productName: "벨트",
          category: "악세사리",
          price: 10003,
          description: "...",
          image:
            "https://img.kwcdn.com/product/fancy/2cb296df-1b17-433a-92fb-bcb4931c647b.jpg?imageView2/2/w/500/q/70/format/webp",
          user_id: 103,
          productColor: "블랙",
          productSize: "acc",
          orderQuantity: 3,
          amount: 1,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 4,
          productOption_id: 9,
          productName: "청바지",
          category: "청바지",
          price: 10004,
          description: "...",
          image:
            "https://img.sonyunara.com/files/goods/349962/1_65c2e3eebe6d2_1.png.webp",
          user_id: 104,
          productColor: "청색",
          productSize: "XS",
          orderQuantity: 4,
          amount: 2,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 5,
          productOption_id: 21,
          productName: "선글라스",
          category: "악세사리",
          price: 10005,
          description: "description5",
          image:
            "https://purplia.com/web/product/tiny/202206/8a8dae079dbc87561bcd810a1506a9e1.webp",
          user_id: 105,
          productColor: "흑색",
          productSize: "acc",
          orderQuantity: 5,
          amount: 3,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 6,
          productOption_id: 23,
          productName: "샌드 베이지 숏츠 면 반바지",
          category: "하의",
          price: 10006,
          description: "description6",
          image:
            "https://static.lookpin.co.kr/20230222081140-83d8/ec6583471ddfeb9f84f06ce9be330351.jpg?resize=450",
          user_id: 106,
          productColor: "베이지",
          productSize: "XS",
          orderQuantity: 6,
          amount: 1,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 7,
          productOption_id: 29,
          productName: "productName7",
          category: "연녹색 자켓",
          price: 10007,
          description: "description7",
          image: "image7",
          user_id: 107,
          productColor: "연녹색",
          productSize: "Free",
          orderQuantity: 7,
          amount: 2,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 8,
          productOption_id: 30,
          productName: "addidus 양말",
          category: "악세사리",
          price: 10008,
          description: "description8",
          image:
            "https://static.lookpin.co.kr/20240411010302-f141/29b761b880cc43b68f2bab4d294ceb08.jpg?resize=450",
          user_id: 108,
          productColor: "color8",
          productSize: "acc",
          orderQuantity: 8,
          amount: 3,
          isReviewed: false,
          carryStatus: "도착완료",
        },
        {
          product_id: 9,
          productOption_id: 32,
          productName: "체크 박시 다크 네이비",
          category: "긴팔",
          price: 10009,
          description: "description9",
          image:
            "https://image.msscdn.net/images/goods_img/20230524/3321836/3321836_16850630806033_500.jpg",
          user_id: 109,
          productColor: "네이비",
          productSize: "Free",
          orderQuantity: 9,
          amount: 1,
          isReviewed: false,
          carryStatus: "도착완료",
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
