'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getPolicesByRut = async(rut) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('policy');
        const list = await pool.request()
                    .input('rut',sql.NVarChar,rut)
                    .query(sqlQueries.policesByRut);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getPolicesByRut
}