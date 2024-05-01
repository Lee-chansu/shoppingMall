const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carry = sequelize.define('Carry', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
  }, {
    timestamps: false
  });

  Carry.associate = (models) => {
    Carry.belongsTo(models.BuyList, { foreignKey: 'order_id' });
    Carry.belongsTo(models.BuyList, { foreignKey: 'user_id' });
  };

  return Carry;
};
