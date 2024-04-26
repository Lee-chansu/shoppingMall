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
    mainImage: {
      type: DataTypes.STRING(255)
    },
    subImage1: {
      type: DataTypes.STRING(255)
    },
    subImage2: {
      type: DataTypes.STRING(255)
    },
    subImage3: {
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
