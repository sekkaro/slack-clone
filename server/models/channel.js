import DataTypes from "sequelize";

export default (sequelize) => {
  sequelize.define(
    "channel",
    {
      name: DataTypes.STRING,
      public: DataTypes.BOOLEAN,
    },
    {
      underscored: true,
    }
  );
};
