const express = require("express");
const validUser = express.Router();

function validUser() {
  if (user_Name == null || user_Name == "") {
    alert("plz enter your name");
    return false;
  } else if (Age == null || Age == "") {
    alert("plz enter your age");
    return false;
  }
}

module.exports = validUser;
