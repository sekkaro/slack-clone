import DataTypes from "sequelize";

export default (sequelize) => {
  sequelize.define("message", {
    text: DataTypes.STRING,
  });
};
