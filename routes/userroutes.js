const express = require("express");
const route = express.Router();
const User = require("../models/user");

route.get("/", (req, res, next) => {
  let users;
  User.find()
    .then((users) => {
      console.log(users);
      users = users;
    })
    .catch((err) => {
      console.log(err);
    });
  res.json({
    users: users,
  });
});

route.post()

module.exports = route;
