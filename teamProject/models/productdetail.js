const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ProductDetail = sequelize.define(
    "ProductDetail",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING(255),
      },
      detailCategory: {
        type: DataTypes.STRING(255),
      },
    },
    {
      timestamps: false,
    }
  );

  ProductDetail.associate = (models) => {
    ProductDetail.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return ProductDetail;
};
