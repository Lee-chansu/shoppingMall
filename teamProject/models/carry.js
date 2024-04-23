const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Carrys = sequelize.define('Carrys', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING(15)
    },
    progress: {
      type: DataTypes.STRING(30)
    },
    carryStart: {
      type: DataTypes.DATE
    },
    carryEnd: {
      type: DataTypes.DATE
    }
  }, {
    timestamps: false
  });

<<<<<<< HEAD
  Carry.associate = (models) => {
    Carry.belongsTo(models.BuyList, { foreignKey: 'order_id' });
=======
  Carrys.associate = (models) => {
    Carrys.belongsTo(models.BuyList, { foreignKey: 'order_id' });
>>>>>>> origin/hyoguen
  };

  return Carrys;
};
