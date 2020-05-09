const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log("MongoDB is Connected ...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
