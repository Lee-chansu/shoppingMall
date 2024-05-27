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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    items: {
      type: DataTypes.JSON
    },
  }, {
    timestamps: false
  });

  PaymentRequest.associate = (models) => {
    PaymentRequest.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return PaymentRequest;
};

