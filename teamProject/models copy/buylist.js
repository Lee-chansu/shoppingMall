const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BuyList = sequelize.define('BuyList', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING(255)
    },
    category: {
      type: DataTypes.STRING(255)
    },
    price: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING(255)
    },
    pdstock: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING(255)
    }
  });

  BuyList.associate = (models) => {
    BuyList.belongsTo(models.User, { foreignKey: 'userId' });
    BuyList.belongsTo(models.Product, { foreignKey: 'productId' });
  };

  return BuyList;
};
