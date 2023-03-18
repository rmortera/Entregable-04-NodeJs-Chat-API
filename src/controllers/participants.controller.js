const ParticipantsServices = require("../services/participants.service");

const createParticipantsConversation = async (req, res) => {
  try {
    const newParticipantConv = req.body;
    const result = await ParticipantsServices.create(newParticipantConv);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getParticipantsConversation = async (req, res) => {
  try {
    const getParticipantsConversation = await ParticipantsServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getParticipantsConversation);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createParticipantsConversation,
  getParticipantsConversation,
};
