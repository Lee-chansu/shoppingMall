"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: 1,
          name: "여름 필수템 베이직 무지 티셔츠",
          price: 19000,
          mainImage:
            "https://static.lookpin.co.kr/20240311035645-7646/1a45c4510e274c2683b1090baf35c4d4.jpg?resize=450",
          createdAt: "2024-04-23 17:50:11",
        },
        {
          id: 2,
          name: "잘나가는 바지",
          price: 12000,
          mainImage:
            "https://static.lookpin.co.kr/20240412071649-2e1c/160b5307286841eaa4c2bc67dccb6d46.jpg?resize=450",
          createdAt: "2024-04-23 17:48:37",
        },
        {
          id: 3,
          name: "소가죽벨트",
          price: 14000,
          mainImage:
            "https://img.kwcdn.com/product/fancy/2cb296df-1b17-433a-92fb-bcb4931c647b.jpg?imageView2/2/w/500/q/70/format/webp",
          createdAt: "2024-04-23 17:48:37",
        },
        {
          id: 4,
          name: "여성여성한 옷",
          price: 36000,
          mainImage:
            "https://img.sonyunara.com/files/goods/349962/1_65c2e3eebe6d2_1.png.webp",
          createdAt: "2024-04-23 17:48:59",
        },
        {
          id: 5,
          name: "잘팔리는 선글라스",
          price: 5000,
          mainImage:
            "https://purplia.com/web/product/tiny/202206/8a8dae079dbc87561bcd810a1506a9e1.webp",
          createdAt: "2024-04-25 14:17:40",
        },
        {
          id: 6,
          name: "샌드 베이지 숏츠 면 반바지",
          price: 30000,
          mainImage:
            "https://static.lookpin.co.kr/20240323052920-b67d/0197b621340848efa059a0662ea7476d.jpg?resize=450",
          createdAt: "2024-04-25 14:28:54",
        },
        {
          id: 7,
          name: "연한 아우터",
          price: 200000,
          mainImage:
            "https://static.lookpin.co.kr/20230222081140-83d8/ec6583471ddfeb9f84f06ce9be330351.jpg?resize=450",
          createdAt: "2024-04-25 14:28:54",
        },
        {
          id: 8,
          name: "불티나게 팔리는 양말",
          price: 1000,
          mainImage:
            "https://static.lookpin.co.kr/20240411010302-f141/29b761b880cc43b68f2bab4d294ceb08.jpg?resize=450",
          createdAt: "2024-04-25 14:28:54",
        },
        {
          id: 100,
          name: "name0",
          price: 0,
          mainImage: "imageUrl0",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 101,
          name: "name1",
          price: 10000,
          mainImage: "imageUrl1",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 102,
          name: "name2",
          price: 20000,
          mainImage: "imageUrl2",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 103,
          name: "name3",
          price: 30000,
          mainImage: "imageUrl3",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 104,
          name: "name4",
          price: 40000,
          mainImage: "imageUrl4",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 105,
          name: "name5",
          price: 50000,
          mainImage: "imageUrl5",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 106,
          name: "name6",
          price: 60000,
          mainImage: "imageUrl6",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 107,
          name: "name7",
          price: 70000,
          mainImage: "imageUrl7",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 108,
          name: "name8",
          price: 80000,
          mainImage: "imageUrl8",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 109,
          name: "name9",
          price: 90000,
          mainImage: "imageUrl9",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
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
