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
      productColor: {
        type: DataTypes.STRING(255),
      },
      productSize: {
        type: DataTypes.INTEGER,
      },
      productStock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  ProductOption.associate = (models) => {
    ProductOption.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return ProductOption;
};
