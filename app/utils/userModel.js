const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
