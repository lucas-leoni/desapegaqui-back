const mongoose = require("../database/index");
const LoginSchema = new mongoose.Schema({
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

mongoose.model("Login", LoginSchema);

/* 
-------------
Body Postman:
-------------
{
    "email": "",
    "password": "",
}
*/