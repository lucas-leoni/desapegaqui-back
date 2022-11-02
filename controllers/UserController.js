const mongoose = require('../database');
const User = mongoose.model('User');

module.exports = {
  async index(req, res) {
    const user = await User.find();
    return res.json(user);
  },

  async show(req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  },

  async save(req, res) {
    const user = await User.create(req.body);
    console.log('Usuário cadastrado com sucesso!');
    return res.json(user);
  },

  async destroy(req, res) {
    const user = await User.findByIdAndRemove(req.params.id);
    return res.json({ message: `User ${user.username} successfully removed` });
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(user);
  },

  async login(req, res) {
    const login = await User.findOne({ email: req.body.email }).clone();
    return res.json(login);
  },
};
