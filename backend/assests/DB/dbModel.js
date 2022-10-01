const mongoose = require("mongoose");
const dbSchema = require("./dbSchema");
const dbModel = mongoose.model("counterid", dbSchema);

module.exports = dbModel;
