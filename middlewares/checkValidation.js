const { check, validationResult } = require("express-validator");

//Register Validation
const registerRules = () => [
  check("name", "Name is required").notEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6, max: 20 })
];

//Login Validation
const loginRules = () => [
  check("email", "Please enter a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6, max: 20 })
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty()
    ? next()
    : res.status(400).send( errors.array().map(err => err.msg) ); //errors model [msg1 , msg2 ,...]
};

module.exports = validationForms = {
  validator,
  registerRules,
  loginRules
};
