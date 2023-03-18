const UsersServices = require("../services/user.services");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await UsersServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getAllUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUsers };
