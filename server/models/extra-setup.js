const applyExtraSetup = (sequelize) => {
  const { user, channel, message, team } = sequelize.models;

  user.belongsToMany(team, {
    through: "member",
    foreignKey: "userId",
  });

  team.belongsToMany(user, {
    through: "member",
    foreignKey: "teamId",
  });

  team.belongsTo(user, {
    foreignKey: "owner",
  });

  channel.belongsTo(team, {
    foreignKey: "teamId",
  });

  message.belongsTo(channel, {
    foreignKey: "channelId",
  });

  message.belongsTo(user, {
    foreignKey: "userId",
  });
};

export default applyExtraSetup;
