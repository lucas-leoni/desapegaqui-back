const mongoose = require('../database');
const Announcement = mongoose.model('Announcement');

module.exports = {
  async index(req, res) {
    const announcement = await Announcement.find().populate('user');
    return res.json(announcement);
  },

  async show(req, res) {
    const announcement = await Announcement.findById(req.params.id).populate(
      'user'
    );
    return res.json(announcement);
  },

  async save(req, res) {
    const announcement = await Announcement.create(req.body);
    console.log('Anúncio cadastrado com sucesso!');
    return res.json(announcement);
  },

  async destroy(req, res) {
    const announcement = await Announcement.findByIdAndRemove(req.params.id);
    return res.json({
      message: `Announcement ${announcement.title} successfully removed`,
    });
  },

  async update(req, res) {
    const announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.json(announcement);
  },
  async showDonations(req, res) {
    const announcement = await Announcement.find({ type: 'donation' }).populate(
      'user'
    );
    return res.json(announcement);
  },
  async showNecessities(req, res) {
    const announcement = await Announcement.find({
      type: 'necessity',
    }).populate('user');
    return res.json(announcement);
  },
};
