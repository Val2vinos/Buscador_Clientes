'use strict';

const express = require('express');
const adressController = require('../controllers/adressController');
const { getCiudad } = require('../data/adress');
const router = express.Router();

const {getRegiones} = adressController;

router.get('/region',getRegiones); 
router.get('/ciudad/:region',getCiudad);
//router.get('/comuna',getComuna);

module.exports = {
    routes: router
}