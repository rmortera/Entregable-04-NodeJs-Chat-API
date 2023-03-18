const { Router } = require("express");
const {
  createParticipantsConversation,
  getParticipantsConversation,
} = require("../controllers/participants.controller");

const router = Router();

router.post("/api/v1/participants", createParticipantsConversation);
router.get("/api/v1/participants", getParticipantsConversation);

module.exports = router;
