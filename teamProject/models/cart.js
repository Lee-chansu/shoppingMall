const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: "user_id" });
    Cart.belongsTo(models.Product, { foreignKey: "product_id" });
  };

  return Cart;
};
