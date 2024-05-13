const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      gender: {
        type: DataTypes.CHAR(1),
        validate: {
          isIn: [["M", "F"]],
        },
      },
      userName: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
      },
      address: {
        type: DataTypes.STRING(100),
      },
      isMaster: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      profileImg: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Cart, { foreignKey: "user_id" });
    User.hasMany(models.ReviewList, { foreignKey: "user_id" });
    User.hasMany(models.BuyList, { foreignKey: "user_id" });
    User.hasMany(models.Carry, { foreignKey: "user_id" });
  };

  return User;
};
