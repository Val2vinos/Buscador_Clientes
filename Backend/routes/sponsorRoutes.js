'use strict';

const express = require('express');
const sponsorController = require('../controllers/sponsorController');
const router = express.Router();

const {getSponsors} = sponsorController;

router.get('/sponsors',getSponsors); 

module.exports = {
    routes: router
}