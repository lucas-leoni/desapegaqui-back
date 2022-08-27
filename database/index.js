const mongoose = require("mongoose");
require("dotenv").config();
const DBCON = process.env.MONGODB;

mongoose
  .connect(DBCON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /* useCreateIndex: true,
    useFindAndModify: false, */
  })
  .then(() => {
    console.log("MONGODB is RUNNING!");
  })
  .catch((error) => {
    console.log(`MONGODB is STOPED, BECAUSE ${error}`);
  });

mongoose.Promise = global.Promise;
module.exports = mongoose;