const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ReviewList = sequelize.define('ReviewList', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING(255)
    },
    reviewImage: {
      type: DataTypes.STRING(255)
    },
    reviewDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  ReviewList.associate = (models) => {
    ReviewList.belongsTo(models.Product, { foreignKey: 'productId' });
    ReviewList.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return ReviewList;
};