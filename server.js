const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.port || 5000;
const requireDir = require("require-dir");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

requireDir("./models");

const User = mongoose.model("User");
const Announcement = mongoose.model("Announcement");
const Donation = mongoose.model("Donation");

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`API RUNNING, http://localhost:${port}`);
});