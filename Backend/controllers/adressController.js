'use strict';

const adressData = require('../data/adress');

const getRegiones = async (req,res,next) => {
    try {
        const regiones = await adressData.getRegiones();
        res.send(regiones);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCiudad = async (req,res,next) => {
    try {
        const rut = req.params.region;
        const ciudad = await adressData.getCiudad(region);
        res.send(ciudad);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getRegiones,
    getCiudad,
}