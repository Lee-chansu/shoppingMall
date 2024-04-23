const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DeleteUser = sequelize.define('DeleteUser', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING(255)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate: {
        isIn: [['M', 'F']]
      }
    },
    userId: {
      type: DataTypes.STRING(255)
    },
    email: {
      type: DataTypes.STRING(255)
    },
    phoneNumber: {
      type: DataTypes.STRING(255)
    },
    address: {
      type: DataTypes.STRING(255)
    },
    isMaster: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deleteDate: {
      type: DataTypes.DATE
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('now')
    }
  }, {
    timestamps: false
  });

  return DeleteUser;
};