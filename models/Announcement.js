const mongoose = require("../database/index");
const AnnouncementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  /* photo: {
    type: ,
    required: false,
  }, */
  createdAt: {
    type: String,
    default: new Date().toLocaleString(),
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

mongoose.model("Announcement", AnnouncementSchema);