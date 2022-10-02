const mongoose = require("mongoose");

const LotteryOfPilgrimsSchema = new mongoose.Schema({
  winner_id: {
    type: Number,
    min: 0,
  },

  winner_Name: {
    type: String,
  },
  numberOfLottery: {
    type: Number,
  },
});

module.exports = LotteryOfPilgrimsSchema;
