const Users = require("./users.model");
const Conversations = require("./conversations.model");
const Messages = require("./messages.model");
const Participants = require("./participants.model");

const initModels = () => {
  Users.hasMany(Conversations, {
    foreignKey: "created_by",
  });
  Conversations.belongsTo(Users, {
    foreignKey: "created_by",
  });

  Users.hasMany(Messages, {
    foreignKey: "user_id",
  });
  Messages.belongsTo(Users, {
    foreignKey: "user_id",
  });

  Conversations.hasMany(Messages, {
    foreignKey: "conversation_id",
  });
  Messages.belongsTo(Conversations, {
    foreignKey: "conversation_id",
  });

  Users.belongsToMany(Conversations, { through: Participants });
  Conversations.belongsToMany(Users, { through: Participants });
};

module.exports = initModels;
