'use strict';

const productServiceData = require('../data/productService');

const getServiceByProduct = async (req,res,next) => {
    try {
        const code = req.params.code;
        const sponsor = req.params.sponsor
        const service = await productServiceData.getServiceByProduct(code,sponsor);
        res.send(service);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getServiceByProduct
}