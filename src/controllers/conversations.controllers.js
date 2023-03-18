const ConversationsServices = require("../services/conversations.service");

const createConversation = async (req, res) => {
  try {
    const newConversation = req.body;
    const conversation = await ConversationsServices.create(newConversation);
    res.status(201).json(conversation);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConversation,
};
