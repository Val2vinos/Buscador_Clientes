'use strict';

const express = require('express');
const adressController = require('../controllers/adressController');
//const { getCiudad } = require('../data/adress');
const router = express.Router();

const { getRegiones,getCiudad,getComuna } = adressController;

router.get('/region',getRegiones); 
router.get('/ciudad/:region',getCiudad);
router.get('/comuna/:idCiudad',getComuna);

module.exports = {
    routes: router
}