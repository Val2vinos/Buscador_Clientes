'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getServiceByProduct = async(code,sponsor) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('productService');
        const list = await pool.request()
                    .input('code',sql.NVarChar,code)
                    .input('sponsor',sql.NVarChar,sponsor)
                    .query(sqlQueries.productByService);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getServiceByProduct
}