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
  }, {
    timestamps: false
  });

  ReviewList.associate = (models) => {
    ReviewList.belongsTo(models.Product, { foreignKey: 'product_id' });
    ReviewList.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return ReviewList;
};
