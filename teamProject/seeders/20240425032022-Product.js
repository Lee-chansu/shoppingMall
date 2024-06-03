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
          subImage1:
            "https://static.lookpin.co.kr/20240311035723-99e6/0e321bc43be1470592c692d8bdd4d4c2.jpg",
          subImage2:
            "https://static.lookpin.co.kr/20240516084931-cf2e/4e2d5c2ba3b64a749cc2ebe1323d1aae.jpg",
          subImage3:
            "https://static.lookpin.co.kr/20240426231145-5b8c/d4a1f8886b8e4ecead241ae461ad1815.jpg",
          description:
            "https://allmut.cafe24.com/web/upload/NNEditor/20240327/ggg.gif,",
          createdAt: "2024-04-23 17:50:11",
        },
        {
          id: 2,
          name: "반팔티 화이트",
          price: 12000,
          mainImage:
            "https://image.msscdn.net/images/goods_img/20240312/3943019/3943019_17108267959953_500.jpg",
          subImage1:
            "https://image.msscdn.net/images/prd_img/20240312/3943019/detail_3943019_17102241182885_500.jpg",
          subImage2:
            "https://image.msscdn.net/images/prd_img/20240312/3943019/detail_3943019_17102241182885_500.jpg",
          subImage3:
            "https://image.msscdn.net/images/prd_img/20240312/3943019/detail_3943019_17102241075672_500.jpg",
          createdAt: "2024-04-23 17:48:37",
        },
        {
          id: 3,
          name: "벨트",
          price: 14000,
          mainImage:
            "https://img.kwcdn.com/product/fancy/2cb296df-1b17-433a-92fb-bcb4931c647b.jpg?imageView2/2/w/500/q/70/format/webp",
          createdAt: "2024-04-23 17:48:37",
        },
        {
          id: 4,
          name: "청바지",
          price: 36000,
          mainImage:
            "https://img.sonyunara.com/files/goods/349962/1_65c2e3eebe6d2_1.png.webp",
          createdAt: "2024-04-23 17:48:59",
        },
        {
          id: 5,
          name: "선글라스",
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
          name: "연녹색 자켓",
          price: 200000,
          mainImage:
            "https://static.lookpin.co.kr/20230222081140-83d8/ec6583471ddfeb9f84f06ce9be330351.jpg?resize=450",
          subImage1:
            "https://static.lookpin.co.kr/20230222144831-cad5/57dd4251b6d7d7922d4234fe5b8b6ef9.jpg",
          subImage2:
            "https://static.lookpin.co.kr/20230222081141-df2f/44a5954495214c0b45f672fc7defc857.jpg",
          createdAt: "2024-04-25 14:28:54",
        },
        {
          id: 8,
          name: "addidus 양말",
          price: 1000,
          mainImage:
            "https://static.lookpin.co.kr/20240411010302-f141/29b761b880cc43b68f2bab4d294ceb08.jpg?resize=450",
          createdAt: "2024-04-25 14:28:54",
        },
        {
          id: 9,
          name: "체크 박시 다크 네이비",
          price: 10000,
          mainImage:
            "https://image.msscdn.net/images/goods_img/20230524/3321836/3321836_16850630806033_500.jpg",
          createdAt: "2024-04-26 14:28:54",
        },
        {
          id: 10,
          name: "블랙 블레이저",
          price: 10000,
          mainImage:
            "https://static.lookpin.co.kr/20211216143652-ef96/808cc60be7ffe35ffa48ffa258095d37.jpg",
          createdAt: "2024-04-26 14:28:54",
        },
        {
          id: 11,
          name: "흰티",
          price: 12500,
          mainImage: "https://i.ibb.co/hBRC72S/ac7d2322ae8b.jpg",
          description:
            "https://i.ibb.co/dLMSMmM/7190d19adbbe.png,https://i.ibb.co/VQXc8kx/545a6940d4ff.png,https://i.ibb.co/RYKWPY7/c42219cb0bf6.png,https://i.ibb.co/18VRTgf/322b1c6122d2.png,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 12,
          name: "슬라이드 - 블랙:화이트",
          price: 44900,
          mainImage:
            "https://image.msscdn.net/images/goods_img/20170313/497858/497858_6_500.jpg",
          subImage1:
            "https://image.msscdn.net/images/prd_img/20170313/497858/detail_497858_110_500.jpg",
          description:
            "https://image.msscdn.net/images/prd_img/20170313/497858/detail_497858_110_500.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 13,
          name: "남녀공용 신발 데님워싱 스니커즈 캔버스화 단화",
          price: 44900,
          mainImage:
            "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/5913/12924aff74f0b8427b385bee541e6161ce82f96ceea1396e9494b6fa7048.jpg",
          subImage1:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/6d7f/67ef6b992c16df71d35fa560dded1606866dab577a41193a4d11a31b8982.jpg",
          subImage2:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/6d7f/67ef6b992c16df71d35fa560dded1606866dab577a41193a4d11a31b8982.jpg",
          subImage3:
            "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/f2c3/f1e7fd94e38328a373de958e13812bebddd5d2b027b560adfbed8c3c231b.jpg",
          description:
            "https://thumbnail7.coupangcdn.com/thumbnails/remote/q89/image/vendor_inventory/405f/cd0df136ddb10febc3c1c24790bb229998c5aca42eecb9a40046f48ec536.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 14,
          name: "데일리 세미 와이드 슬랙스",
          price: 44900,
          mainImage:
            "https://static.lookpin.co.kr/20240417072659-94ba/23c4a0642a8e425d8360c58a2368cdd5.jpg",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 15,
          name: "Black Sweat Shorts 반바지",
          price: 44900,
          mainImage:
            "https://image.msscdn.net/images/goods_img/20210428/1926034/1926034_1_500.jpg",
          description:
            "https://image.msscdn.net/images/prd_img/20240530112229925662125636657e2e5e1fe7.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 16,
          name: "조거팬츠",
          price: 44900,
          mainImage:
            "https://static.lookpin.co.kr/20240403044052-106b/ccc64f3c9fbc4ca9a8597781b956b93a.jpg",
          description:
            "https://themayday.cafe24.com/web/upload/NNEditor/20240424/751cae51d813f9fe0ae22fe2f7f8be39.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 17,
          name: "나이키 레볼루션 7 러닝화",
          price: 44900,
          mainImage:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30d7afaa-343b-4439-b65d-bb544c65420e/%EB%A0%88%EB%B3%BC%EB%A3%A8%EC%85%98-7-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-IIFdEk9F.png",
          description:
            "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c0e183a4-cfd2-4046-85c1-c582ea0e227e/pdp.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 18,
          name: "니트 풀오버",
          price: 44900,
          mainImage:
            "https://img.kwcdn.com/garner-api/transfer/2023-7-12/970822c50600e3ebabdf03c73f033683.jpg?imageView2/2/w/800/q/70/format/webp",
          subImage1:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/60a81d38f5aec7b583bc6abf5b8e603e.jpg?imageView2/2/w/800/q/70/format/webp",
          subImage2:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d87981bf2df80f7c4cd191f895c1662e.jpg?imageView2/2/w/800/q/70/format/webp",
          subImage3:
            "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d51a6ecd2cddedc19f553fb91bc83eca.jpg?imageView2/2/w/800/q/70/format/webp",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 19,
          name: "핑크 가디건",
          price: 32000,
          mainImage:
            "https://cafe24.poxo.com/ec01/cocomimi93/MkCj60lH04MGF8dcvBKuW0pvj+0/yiCG6nGDiNv882I1u4NAS7B7bCpybysblSmyJDaDijtzjovCsytRMqiLfg==/_/web/product/small/202310/69806db61ab9f8fc91ac7f462d129896.webp",
          description:
            "https://cafe24.poxo.com/ec01/cocomimi93/MkCj60lH04MGF8dcvBKuW0pvj+0/yiCG6nGDiNv882I1u4NAS7B7bCpybysblSmyJDaDijtzjovCsytRMqiLfg==/_/web/upload/NNEditor/20230927/copy-1695805809-0-3.jpg,",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 20,
          name: "남성 코트",
          price: 10500,
          mainImage:
            "https://static.lookpin.co.kr/20240312014123-3bb9/5bb2e324e96e47899b81927d9b40346b.jpg",
          description:
            "https://static.lookpin.co.kr/20240312014123-a1f4/b95fa61321e649c38284c7b37bae876c.jpg,",
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
