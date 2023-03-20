'use strict';

const express = require('express');
const atributosController = require('../controllers/atributosController');
const router = express.Router();

const { getTipoAtencion,getPrevision,getTipoLLamada,getUsuarioLogin,getOrden } = atributosController;

router.get('/tipoatencion',getTipoAtencion);
router.get('/prevision',getPrevision)
router.get('/tipollamada',getTipoLLamada)
router.get('/usuario',getUsuarioLogin)
router.get('/orden',getOrden)

module.exports = {
    routes: router
}