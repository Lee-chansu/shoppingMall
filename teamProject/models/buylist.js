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
    image: {
      type: DataTypes.STRING(255)
    },
    buyDate: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
    amount: {
      type: DataTypes.INTEGER
    },
    carryStatus: {
      type: DataTypes.STRING(255)
    }
  }, {
    timestamps: false
  });

  BuyList.associate = (models) => {
    BuyList.belongsTo(models.User, { foreignKey: 'user_id' });
    BuyList.belongsTo(models.ProductOption, { foreignKey: 'productOption_id' });
  };

  return BuyList;
};
