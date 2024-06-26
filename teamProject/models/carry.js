const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carry = sequelize.define('Carry', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.STRING(40)
    },
    mainAddress: {
      type: DataTypes.STRING(100)
    },
    detailAddress: {
      type: DataTypes.STRING(100)
    },
    carryMessage: {
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
  };

  return Carry;
};
