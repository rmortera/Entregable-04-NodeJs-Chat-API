const Messages = require("../models/messages.model");

class MessagesServices {
  static async create(newMessage) {
    try {
      const result = await Messages.create(newMessage);
      return result;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MessagesServices;
