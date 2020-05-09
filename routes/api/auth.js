const express = require("express");
const router = express.Router();

const { register, login , current } = require("../../controlers/authControler");
const isAuth = require("../../middlewares/passeportSetup");
const {
  validator,
  registerRules,
  loginRules
} = require("../../middlewares/checkValidation");

//@route POST api/users/register
//@desc  Register User
//@acess Public
router.post("/register", registerRules(), validator, register);

//@route POST api/users/login
//@desc  LOGIN User
//@acess Public
router.post("/login", loginRules(), validator, login);

//@route POST api/users/
//@desc  GET USERES
//@acess Private

router.get("/current", isAuth(), current);

module.exports = router;
