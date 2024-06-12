// models/User.js
// Credit to ChatGPT for assistance and code comments.

'use strict';

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
