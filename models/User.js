const mongoose = require("../database/index");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3
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
    cep: {
      type: String,
      required: false,
      min: 8,
      max: 8,
    },
    city: {
      type: String,
      required: false,
      min: 3,
    },
    state: {
      type: String,
      required: false,
      min: 2,
      max: 2,
    },
    street: {
      type: String,
      required: false,
      min: 3,
    },
    number: {
      type: Number,
      required: false,
      min: 1,
    },
    neighborhood: {
      type: String,
      required: false,
      min: 3,
    },
    complement: {
      type: String,
      required: false,
    },
  },
  contact: {
    ddd: {
      type: Number,
      required: false,
      min: 2,
      max: 2,
    },
    telephone: {
      type: String,
      required: false,
      min: 8,
      max: 9,
    },
  },
});

mongoose.model("User", UserSchema);