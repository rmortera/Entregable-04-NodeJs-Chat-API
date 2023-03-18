const { Router } = require("express");
const {
  createConversation,
} = require("../controllers/conversations.controllers");

const router = Router();

router.post("/api/v1/conversations", createConversation);

module.exports = router;
