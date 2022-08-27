const mongoose = require("../database");
const Login = mongoose.model("Login");

module.exports = {
  async index(req, res) {
    const login = await Login.find();
    return res.json(login);
  },

  async show(req, res) {
    const login = await Login.findById(req.params.id);
    return res.json(login);
  },

  async save(req, res) {
    const login = await Login.create(req.body);
    return res.json(login);
  },

  async destroy(req, res) {
    const login = await Login.findByIdAndRemove(req.params.id);
    return res.json({ message: "Successfully removed" });
  },

  async update(req, res) {
    const login = await Login.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(login);
  },
};