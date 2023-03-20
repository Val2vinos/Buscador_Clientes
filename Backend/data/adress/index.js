'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRegiones = async() => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('adress');
        const list = await pool.request()
                    .query(sqlQueries.regiones);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCiudad = async(region) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('adress');
        const list = await pool.request()
                    .input('region',sql.NVarChar,region)
                    .query(sqlQueries.ciudades);
       
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getComuna = async(ciudad) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('adress');
        const list = await pool.request()
                    .input('idCiudad',sql.NVarChar,ciudad)
                    .query(sqlQueries.comunas);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}
module.exports = {
    getRegiones,
    getCiudad,
    getComuna,
}