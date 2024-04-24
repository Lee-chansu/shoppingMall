const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ProductOption = sequelize.define('ProductOption', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING(255)
    },
    productColor: {
      type: DataTypes.STRING(255)
    },
    productSize: {
      type: DataTypes.INTEGER
    },
    productStock: {
      type: DataTypes.INTEGER
    }
  });

  ProductOption.associate = (models) => {
    ProductOption.belongsTo(models.Product, { foreignKey: 'productId' });
  };

  return ProductOption;
};