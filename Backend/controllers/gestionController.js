'use strict';

const gestionData = require('../data/gestion');

const setGestion = async(req,res,next) => {
    try {
        const result = await gestionData.setGestion(req.body);
        console.log(result)
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    setGestion,
}