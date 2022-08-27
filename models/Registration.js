const mongoose = require("../database/index");
const RegistrationSchema = new mongoose.Schema({
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
});

mongoose.model("Registration", RegistrationSchema);

/* 
-------------
Body Postman:
-------------
{
    "username": "",
    "email": "",
    "password": "",
}
*/