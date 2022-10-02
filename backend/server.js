const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./dbConnection.js");

// require("dotenv");
//  import mongoose from ("./assests/DB/dbModel.js")
const morgan = require("morgan");
const app = express();

const port = 3000;

const corsOptins = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptins));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`${req.method}${req.url}`);
  next();
});

//Get Methods
app.get("/", (req, res) => {
  res.send("LotteryOfPilgrims");
});

//Post Methods
app.post(["/user", "/users"], (req, res) => {
  const { id, username, age } = req.body;
  users.push({ id, username, age });
});

//Error MiddleWare Handling
app.use((err, req, res, next) => {
  res.status(err.status || 555).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Lottery App listening on port ${port}`);
});
