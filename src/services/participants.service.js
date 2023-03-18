const Participants = require("../models/participants.model");

class ParticipantsServices {
  static async create(newParticipantConv) {
    try {
      const participantsCreated = await Participants.create(newParticipantConv);
      return participantsCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getParticipantsConv = await Participants.findAll();
      return getParticipantsConv;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ParticipantsServices;
