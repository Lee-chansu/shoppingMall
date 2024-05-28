const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const BuyList = sequelize.define(
    "BuyList",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
      },
      productName: {
        type: DataTypes.STRING(255),
      },
      category: {
        type: DataTypes.STRING(255),
      },
      price: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING(255),
      },
      image: {
        type: DataTypes.STRING(255),
      },
      buyDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("now"),
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      carryStatus: {
        type: DataTypes.STRING(255),
      },
      productColor: {
        type: DataTypes.STRING(255),
      },
      productSize: {
        type: DataTypes.STRING(4),
      },
      orderQuantity: {
        type: DataTypes.INTEGER,
      },
      isReviewed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  BuyList.associate = (models) => {
    BuyList.belongsTo(models.User, { foreignKey: "user_id" });
  };

  return BuyList;
};
