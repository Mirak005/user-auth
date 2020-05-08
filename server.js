const express = require("express");
const passport = require("passport");

const connectDb = require("./config/db");

const users = require("./routes/api/users");

const app = express();

//Connect the db
connectDb();

//Middlewares
app.use(express.json());
app.use(passport.initialize());

//Routes
app.use("/api/users", users);

//Lunch the server
const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) return console.log("Server is not running !!!");
  console.log(`Server is running on port ${port}...`);
});
