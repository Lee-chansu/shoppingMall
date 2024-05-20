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
    starPoint: {
      type: DataTypes.INTEGER(1)
    },
    reviewImage: {
      type: DataTypes.TEXT
    },
    reviewDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false
  });

  ReviewList.associate = (models) => {
    ReviewList.belongsTo(models.User, { foreignKey: 'user_id' });
    ReviewList.belongsTo(models.ProductOption, { foreignKey: 'productOption_id' });
  };

  return ReviewList;
};
