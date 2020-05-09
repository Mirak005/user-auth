const express = require("express");

const isAuth = require("../../middlewares/passeportSetup");
const router = express.Router();
const {
  getAllUsers,
  deleteUserById,
  editUserById
} = require("../../controlers/usersControler");

//@route GET api/users
//@desc  GET ALL USERES
//@acess Public
router.get("/", getAllUsers);

//@route delete api/users
//@desc  delete ALL USERES
//@acess Private
router.delete("/:id", isAuth(), deleteUserById);

//@route edit api/users
//@desc  edit ALL USERES
//@acess Private
router.put("/:id", isAuth(), editUserById);

module.exports = router;
