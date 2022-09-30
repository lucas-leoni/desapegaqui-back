const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const AnnouncementController = require('./controllers/AnnouncementController');
const DonationController = require('./controllers/DonationController');

// User routes

routes.get('/users', UserController.index);
routes.post('/user', UserController.save);
routes.delete('/user/:id', UserController.destroy);
routes.get('/user/:id', UserController.show);
routes.put('/user/:id', UserController.update);

// Login route

routes.post('/login', UserController.login);

// Announcement routes

routes.get('/announcements', AnnouncementController.index);
routes.post('/announcement', AnnouncementController.save);
routes.delete('/announcement/:id', AnnouncementController.destroy);
routes.get('/announcement/:id', AnnouncementController.show);
routes.put('/announcement/:id', AnnouncementController.update);

// Donation announcements routes

routes.get('/donation-announcements', AnnouncementController.showDonations);

// Necessity announcements routes

routes.get('/necessity-announcements', AnnouncementController.showNecessities);

// Donation routes

routes.get('/donations', DonationController.index);
routes.post('/donation', DonationController.save);
routes.delete('/donation/:id', DonationController.destroy);
routes.get('/donation/:id', DonationController.show);
routes.put('/donation/:id', DonationController.update);

module.exports = routes;
