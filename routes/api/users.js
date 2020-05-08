const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const isAuth = require("../../middlewares/passeportSetup");

const router = express.Router();
const {
  validator,
  registerRules,
  loginRules
} = require("../../middlewares/checkValidation");

const User = require("../../models/User");
const secret = config.get("secretOrKey");

//@route POST api/users/register
//@desc  Register User
//@acess Public
router.post("/register", registerRules(), validator, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: "User already exists" });
    }

    user = new User({ name, email, password });

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    //Save the user
    await user.save();

    //Sign in the User
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    };

    jwt.sign(payload, secret, (err, token) => {
      if (err) throw err;
      res.json({ token: `Bearer ${token}` });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

//@route POST api/users/login
//@desc  LOGIN User
//@acess Public
router.post("/login", loginRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    //Check if user exists
    if (!user) {
      return res.status(400).json({ errors: "Ivalid credentials" });
    }
    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: "Ivalid credentials" });
    }

    //Sign in the User
    const payload = {
      id: user._id
    };

    jwt.sign(payload, secret, (err, token) => {
      if (err) throw err;
      res.json({ token: `Bearer ${token}` });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

//@route POST api/users/
//@desc  LOGIN User
//@acess Private

router.get("/", isAuth(), async (req, res) => {
  try {
    console.log(req.user);
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send("Server Error !!");
  }
});

module.exports = router;
