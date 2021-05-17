import DataTypes from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "team",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      underscored: true,
    }
  );
};
