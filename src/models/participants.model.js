const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Participants = db.define(
  "participants",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    conversationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "conversations_id",
    },
    usersId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "users_id",
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Participants;
