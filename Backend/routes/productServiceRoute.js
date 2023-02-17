'use strict';

const express = require('express');
const productServiceController = require('../controllers/productServiceController');
const router = express.Router();

const {getServiceByProduct} = productServiceController;

router.get('/servicebyproduct/:code&:sponsor',getServiceByProduct); 

module.exports = {
    routes: router
}