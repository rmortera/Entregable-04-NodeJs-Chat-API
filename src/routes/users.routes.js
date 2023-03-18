const { Router } = require("express");
const { createUser, getUsers } = require("../controllers/user.controllers");
const { createUserValidator } = require("../validators/users.validators");

const router = Router();

router.post("/api/v1/users", createUserValidator, createUser);
router.get("/api/v1/users", getUsers);

module.exports = router;
