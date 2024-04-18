const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const StarPoint = sequelize.define('StarPoint', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    starPoint: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5
      }
    }
  });

  StarPoint.associate = (models) => {
    StarPoint.belongsTo(models.ReviewList, { foreignKey: 'reviewId' });
    StarPoint.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return StarPoint;
};
