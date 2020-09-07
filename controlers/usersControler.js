const User = require("../models/User");

const usersControler = {
  getAllUsers: async (req, res) => {
    try {
      const limit = 2;
      const length = await User.countDocuments(); // length array of data 
      const n_pages = Math.ceil(length / 2);
      const page = req.query.page;
      const users = await User.find()
        .limit(limit)
        .skip((page - 1) * limit);

      res.send({ users, n_pages });
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
    console.log("d");
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { $set: update },
        { new: true }
      );
      if (!user) {
        return res.status(400).send({ msg: "User dont exist" });
      }

      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send({ errors: "Server Error" });
    }
  },
};

module.exports = usersControler;
