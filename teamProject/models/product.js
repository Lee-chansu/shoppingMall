const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255)
    },
    price: {
      type: DataTypes.INTEGER
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pdstock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    mianImage: {
      type: DataTypes.STRING(255)
    },
    subimage1: {
      type: DataTypes.STRING(255)
    },
    subimage2: {
      type: DataTypes.STRING(255)
    },
    subimage3: {
      type: DataTypes.STRING(255)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false
  });

  return Product;
};
