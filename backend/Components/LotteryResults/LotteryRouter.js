const express = require("express");
const { schema, create } = require("./LotteryModel");
const LotteryResult = express.Router();

async function getUserID() {
  try {
    const lastID = await dbModel.findOne({});
    return lastID.user_ID + 1;
  } catch (error) {
    console.log(error);
  }
}

//Get Lottery Results
LotteryResult.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const filterdLottery = await LotteryModel.find({});
    res.send(filterdLottery);
  } catch (error) {
    next("Validation", error);
  }
});

// //Add New Lottery Results
// LotteryResult.post("/", validUser, async (req, res, next) => {
//   const { user_Name, Age } = req.body;
//   try {
//     //check valid
//     await schema.validateAsync({ user_Name, Age });
//     await dbModel.create({
//       _id: await getwinner_id(),
//       user_Name,
//       Age,
//       created_at: new Date().totoUTCString(),
//     });
//     //increament
//     await dbModel.findByIdAndUpdate(1, {
//       $inc: {
//         res_ID: 1,
//       },
//     });
//     res.send({ success: true });
//   } catch (error) {
//     next("Validation", error);
//   }
// });

module.exports = LotteryRouter;
