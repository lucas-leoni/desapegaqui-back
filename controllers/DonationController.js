const mongoose = require("../database");
const Donation = mongoose.model("Donation");

module.exports = {
  async index(req, res) {
    const donation = await Donation.find().populate("announcement").populate("donor").populate("beneficiary");
    return res.json(donation);
  },

  async show(req, res) {
    const donation = await Donation.findById(req.params.id).populate("announcement").populate("donor")
    .populate("beneficiary");
    return res.json(donation);
  },

  async save(req, res) {
    const donation = await Donation.create(req.body);
    console.log("Doação realizada com sucesso!");
    return res.json(donation);
  },

  async destroy(req, res) {
    const donation = await Donation.findByIdAndRemove(req.params.id);
    return res.json({ message: `Donation ${donation.announcement.title} successfully removed` });
  },

  async update(req, res) {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(donation);
  },
};
