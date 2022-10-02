const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: Number,
    min: 0,
  },
  user_Name: {
    type: String,
    required: [true, "plz enter your name"],
    unique: true,
  },
  Age: {
    type: Number,
    required: [true, "plz enter your age"],
  },
});

module.exports = userSchema;
