const Conversations = require("../models/conversations.model");
const Users = require("../models/users.model");
const Messages = require("../models/messages.model");

class ConversationsServices {
  static async create(newConversation) {
    try {
      const result = await Conversations.create(newConversation);
      return result;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConversationsServices;
