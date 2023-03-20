'use strict';

const si = require('systeminformation');
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
let usuario = ''

si.users()
    .then(data => {
            usuario = data[0].user
            return data[0].user
    })
        .catch(error => console.error(error));

const getTipoAtencion = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('atributos');
        const list = await pool.request()
                    .query(sqlQueries.tipoAtencion);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getPrevision = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('atributos');
        const list = await pool.request()
                    .query(sqlQueries.prevision)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getTipoLLamada = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('atributos');
        const list = await pool.request()
                    .query(sqlQueries.tipoLLamada)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getUsuarioLogin = async() =>{
    
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('atributos');
        const list = await pool.request()
                    .query(sqlQueries.users)
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const setOrden = async() => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('atributos');
        const list = await pool.request()
                    .query(sqlQueries.updateOrden)
        return list.recordset;
    } catch{
        return error.message;
    }
}

module.exports = {
    getTipoAtencion,
    getPrevision,
    getTipoLLamada,
    getUsuarioLogin,
    setOrden
}