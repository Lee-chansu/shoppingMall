const { DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

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
  }, {
    timestamps: false
  });

  PaymentRequest.associate = (models) => {
    PaymentRequest.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return PaymentRequest;
};

