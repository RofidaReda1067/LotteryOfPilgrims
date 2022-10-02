const express = require("express");
const userRouter = express.Router();

const dbModel = require("../../assests/DB/dbModel.js");
const { schema } = require("./userModel.js");
const userModel = require("./userModel.js");
const validUser = require("./validation.js");

async function getUserID() {
  try {
    const lastID = await dbModel.findOne({});
    return lastID.user_ID + 1;
  } catch (error) {
    console.log(error);
  }
}

//////Get User By ID//////////
userRouter.get("/", validUser, async (req, res, next) => {
  try {
    const id = await validUser.findById(id).select("user_Name age");
    res.setDefaultEncoding(user);
  } catch (error) {
    next("Validation_Error", error);
  }
});

/////Add user data to user table
userRouter.post("/", async (req, res, next) => {
  const { user_Name, Age } = req.body;
  try {
    //check
    await schema.validateAsync({
      user_Name,
      Age,
    });
    await userModel.create({
      _id: await getUserID(),
      user_Name,
      Age,
      created_at: new Date().totoUTCString(),
    });
    await dbModel.findByIdAndUpdate(1, {
      $inc: {
        user_ID: 1,
      },
    });
    res.send({ success: true });
  } catch (error) {
    next("Validation_Error", error);
  }
});

module.exports = userRouter;
