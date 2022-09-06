const mongoose = require("../database/index");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 16,
  },
  address: {
    zip_code: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
    number: {
      type: Number,
      required: false,
    },
    neighborhood: {
      type: String,
      required: false,
    },
    complement: {
      type: String,
      required: false,
    },
  },
  telephone: {
    area_code: {
      type: Number,
      required: false,
    },
    telephone: {
      type: String,
      required: false,
    },
  },
});

mongoose.model("User", UserSchema);

/* 
-------------
Body Postman:
-------------
{
    "username": "",
    "email": "",
    "password": ""
}
*/