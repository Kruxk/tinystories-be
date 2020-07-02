const { Router } = require("express");
const { SALT_ROUNDS } = require("../config/constants");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const authMiddleWare = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.token)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });

    return res.status(200).send({ ...user.dataValues, token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name, picture } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }
  try {
    const newUser = await User.create({
      email,
      token: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      picture,
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ ...newUser.dataValues, token });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/picture", authMiddleWare, async (req, res, next) => {
  const { id } = req.user.dataValues;
  const { url } = req.body;
  try {
    const user = await User.findByPk(id);
    user.update({
      picture: url,
    });
    res.send(user.dataValues.picture);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
