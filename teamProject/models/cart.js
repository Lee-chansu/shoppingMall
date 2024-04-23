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

<<<<<<< HEAD
  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: 'user_id' });
=======
  Carts.associate = (models) => {
    Carts.belongsTo(models.User, { foreignKey: 'user_id' });
>>>>>>> origin/hyoguen
  };

  return Carts;
};
