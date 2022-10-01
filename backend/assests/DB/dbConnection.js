const mongoose = require("mongoose");
// require("dotenv");
//Connection URI
const uri = `mongodb+srv://Rofida:Rofida@lotteryofpilgrims.5lorzkc.mongodb.net/?retryWrites=true&w=majority`;

async function process() {
  try {
    //Connect the client t the server
    await mongoose.connect(uri);
    console.log(" successfully Connection ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
run();
