const UsersServices = require("../services/user.services");
const bcrypt = require("bcrypt");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UsersServices.getUser(email);

    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        error: "User Not Found",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "Password doesn't match with user email",
        error: "Invalid password",
      });
    }

    const { id, name, lastname, username } = user;
    res.json({ id, name, lastname, username, email });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
};
