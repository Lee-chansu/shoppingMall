const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PaymentRequest = sequelize.define('PaymentRequest', {
    id: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    amount: {
      type: DataTypes.INTEGER
    },
    items: {
      type: DataTypes.JSON
    },
    mainAddress: {
      type: DataTypes.STRING(100),
    },
    detailAddress: {
      type: DataTypes.STRING(100),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    timestamps: false
  });

  PaymentRequest.associate = (models) => {
    PaymentRequest.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return PaymentRequest;
};

