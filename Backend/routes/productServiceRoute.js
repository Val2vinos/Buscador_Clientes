'use strict';

const express = require('express');
const productServiceController = require('../controllers/productServiceController');
const router = express.Router();

const {getServiceByProduct, getServiceTypeByService} = productServiceController;

router.get('/servicebyproduct/:code&:sponsor',getServiceByProduct);
router.get('/servicetypebyservice/:serviceId',getServiceTypeByService) 

module.exports = {
    routes: router
}