const express = require('express');
const router = new express.Router;

const User = require('./controllers/UserController');
const Vote = require('./controllers/VoteController');
const Restaurant = require('./controllers/RestaurantController');

// User routes
router.get('/user', User.index);
router.get('/user/:id', User.show);
router.post('/user', User.create);
router.put('/user', User.update);
router.delete('/user/:id', User.delete);

// Restaurant routes
router.get('/restaurant', Restaurant.index);
router.get('/restaurant/:id', Restaurant.show);
router.post('/restaurant', Restaurant.create);
router.put('/restaurant', Restaurant.update);
router.delete('/restaurant/:id', Restaurant.delete);

// Vote routes
router.get('/vote', Vote.index);
router.get('/vote/:id', Vote.show);
router.post('/vote', Vote.create);
router.put('/vote', Vote.update);
router.delete('/vote/:id', Vote.delete);

module.exports = router;