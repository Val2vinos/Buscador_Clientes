'use strict';

const atributosData = require('../data/atributos');

const getTipoAtencion = async(req,res,next) => {
    try {
        const tipoAtencion = await atributosData.getTipoAtencion();
        res.send(tipoAtencion);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPrevision = async(req,res,next) => {
    try {
        const prevision = await atributosData.getPrevision();
        res.send(prevision);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTipoLLamada = async(req,res,next) => {
    try {
        const tipo = await atributosData.getTipoLLamada();
        res.send(tipo)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUsuarioLogin = async(req,res,next) => {
    try {
        const usuario = await atributosData.getUsuarioLogin();
        res.send(usuario)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getOrden = async(req,res,next) => {
    try {
        // await atributosData.setOrden();
        const orden = await atributosData.setOrden();
        res.send(orden)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    getTipoAtencion,
    getPrevision,
    getTipoLLamada,
    getUsuarioLogin,
    getOrden,
}