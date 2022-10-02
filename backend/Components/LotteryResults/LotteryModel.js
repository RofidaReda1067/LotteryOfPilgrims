const mongoose = require("mongoose");
const LotteryOfPilgrimsSchema = require("./LotterySchema.js");

const LotteryModel = mongoose.model("Lottery", LotteryOfPilgrimsSchema);
module.exports = LotteryModel;
