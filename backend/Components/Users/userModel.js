const mongoose = require("mongoose");
const userSchema = require("./userSchema.js");
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
