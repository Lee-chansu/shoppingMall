const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carry = sequelize.define('Carry', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING(15)
    },
    progress: {
      type: DataTypes.STRING(30)
    },
    carryStart: {
      type: DataTypes.DATE
    },
    carryEnd: {
      type: DataTypes.DATE
    }
  });

  Carry.associate = (models) => {
    Carry.belongsTo(models.BuyList, { foreignKey: 'order_id' });
  };

  return Carry;
};
