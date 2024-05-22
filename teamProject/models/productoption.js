const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ProductOption = sequelize.define(
    "ProductOption",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      color: {
        type: DataTypes.STRING(255),
      },
      size: {
        type: DataTypes.STRING(10),
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  ProductOption.associate = (models) => {
    ProductOption.hasMany(models.ReviewList, {
      foreignKey: "productOption_id",
    });
    ProductOption.hasMany(models.Cart, { foreignKey: "productOption_id" });
    ProductOption.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return ProductOption;
};
