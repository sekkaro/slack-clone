import DataTypes from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "user",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
};
