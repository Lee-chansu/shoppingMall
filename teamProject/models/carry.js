const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carry = sequelize.define('Carry', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(15)
    },
    address: {
      type: DataTypes.STRING(100)
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
    Carry.belongsTo(models.User, { foreignKey: 'user_id' });
    Carry.belongsTo(models.PaymentRequest, { foreignKey: 'order_id' });
  };

  return Carry;
};
