const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: Number,
    min: 0,
  },
});
