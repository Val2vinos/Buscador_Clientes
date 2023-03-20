'use strict';

const express = require('express');
const gestionController = require('../controllers/gestionController');
const router = express.Router();

const { setGestion } = gestionController;

router.post('/gestion',setGestion);

module.exports = {
    routes: router
}