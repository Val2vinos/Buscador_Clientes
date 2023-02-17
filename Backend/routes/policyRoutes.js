'use strict';

const express = require('express');
const policyController = require('../controllers/policyController');
const router = express.Router();

const {getPolicesByRut} = policyController;

router.get('/policesbyrut/:rut',getPolicesByRut); 

module.exports = {
    routes: router
}