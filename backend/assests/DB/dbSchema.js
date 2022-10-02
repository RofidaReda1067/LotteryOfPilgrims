const mongoose = require("mongoose");

const dbSchema = new mongoose.Schema({
  _id: "number",
  user_ID: "number",
  user_Age: "number",
  user_Name: "string",
  winner_id: "number",
  winner_Name: "string",
  numberOfLotter: "number",
});

module.exports = dbSchema;
