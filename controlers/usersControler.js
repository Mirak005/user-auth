const User = require("../models/User");

const usersControler = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      res.status(500).send({ erors: "Server Error" });
    }
  },

  deleteUserById: async (req, res) => {
    const id = req.params.id;
    try {
      await User.findOneAndRemove({ _id: id });
      res.send({ msg: "User Deleted with success" });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  },
  editUserById: async (req, res) => {
    const id = req.params.id;
    const update = { ...req.body };
    console.log(update);
    try {
      await User.findOneAndUpdate({ _id: id }, { $set: update } , { new:false });

      res.send({ msg: "ok" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ errors: "Server Error" });
    }
  }
};

module.exports = usersControler;
