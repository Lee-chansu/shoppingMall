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
  }, {
    timestamps: false
  });

  StarPoint.associate = (models) => {
    StarPoint.belongsTo(models.ReviewList, { foreignKey: 'review_id' });
    StarPoint.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return StarPoint;
};
