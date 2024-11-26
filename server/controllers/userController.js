const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role, firstName, phone, lastName) => {
  return jwt.sign({ id, email, role, firstName, phone, lastName }, process.env.SECRET_KEY, { expiresIn: "24h" });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role, firstName, lastName, phone } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest("Пользователь с таким email уже существует"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      firstName,
      lastName,
      phone,
      password: hashPassword,
    });

    const token = generateJwt(user.id, user.email, user.role, user.firstName, user.phone, user.lastName);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.email, user.role, user.firstName, user.phone, user.lastName);
    console.log("user: ", user);
    console.log("TOKEN: ", token);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(
      req.user.id,
      req.user.email,
      req.user.role,
      req.user.firstName,
      req.user.phone,
      req.user.lastName
    );
    console.log("body: ", req);
    console.log("TOKEN: ", token);
    return res.json({ token });
  }
}

module.exports = new UserController();
