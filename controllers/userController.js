const ApiError = require("../error/ApiError");
const { User } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWT = (login, role) => {
  return jwt.sign({ login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async authorisation(req, res, next) {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      return next(ApiError.internal("User not found!!!"));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Incorrect password!!!"));
    }
    const token = generateJWT(user.login, user.role || "user");
    const getInformation = { role: user.role, token };
    return res.json(getInformation);
  }
}
module.exports = new UserController();
