'use strict';

const policyData = require('../data/policy');

const getPolicesByRut = async (req,res,next) => {
    try {
        const rut = req.params.rut;
        const policy = await policyData.getPolicesByRut(rut);
        res.send(policy);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getPolicesByRut,
}