const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carts = sequelize.define('Carts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING(255)
    },
    amount: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });

  Carts.associate = (models) => {
    Carts.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Carts;
};
