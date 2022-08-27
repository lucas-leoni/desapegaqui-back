const mongoose = require("../database");
const Registration = mongoose.model("Registration");

module.exports = {
  async index(req, res) {
    const registration = await Registration.find();
    return res.json(registration);
  },

  async show(req, res) {
    const registration = await Registration.findById(req.params.id);
    return res.json(registration);
  },

  async save(req, res) {
    const registration = await Registration.create(req.body);
    return res.json(registration);
  },

  async destroy(req, res) {
    const registration = await Registration.findByIdAndRemove(req.params.id);
    return res.json({ message: `User ${registration.username} successfully removed` });
  },

  async update(req, res) {
    const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(registration);
  },
};