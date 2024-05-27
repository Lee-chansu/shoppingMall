const { DataTypes } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      price: {
        type: DataTypes.INTEGER,
      },
      mainImage: {
        type: DataTypes.STRING(255),
      },
      subImage1: {
        type: DataTypes.STRING(255),
      },
      subImage2: {
        type: DataTypes.STRING(255),
      },
      subImage3: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.STRING(255),
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("now"),
      },
    },
    {
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.ProductOption, { foreignKey: "product_id" });
    Product.hasMany(models.ProductDetail, { foreignKey: "product_id" });
  };

  return Product;
};
