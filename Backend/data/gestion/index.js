'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const setGestion = async(data) => {
    console.log('grabo datos')
    const values = Object.values(data)
    console.log(values[2])
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('gestion');
        const list = await pool.request()
                    .input('orden',sql.Int,values[0])
                    .input('ejecutiva',sql.NVarChar,values[1])
                    .input('fecha_gestion',sql.Date,values[2])
                    .input('hora_gestion',sql.NVarChar,values[3])
                    .input('rut_titular',sql.NVarChar,values[4])
                    .input('rut_paciente',sql.NVarChar,values[5])
                    .input('nombre_paciente',sql.NVarChar,values[6])
                    .input('fecha_nacimiento',sql.Date,values[7])
                    .input('id_prevision',sql.Int,values[8])
                    .input('direccion',sql.NVarChar,values[9])
                    .input('id_comuna',sql.UniqueIdentifier,values[10])
                    .input('id_ciudad',sql.UniqueIdentifier,values[11])
                    .input('cod_region',sql.Int,values[12])
                    .input('telefono',sql.NVarChar,values[13])
                    .input('email',sql.NVarChar,values[14])
                    .input('id_tipo_atencion',sql.Int,values[15])
                    .input('descripcion_atencion',sql.NVarChar,values[16])
                    .input('cod_producto',sql.NVarChar,values[17])
                    .input('id_servicio',sql.UniqueIdentifier,values[18])
                    .input('poliza',sql.NVarChar,values[19])
                    .input('sponsor',sql.NVarChar,values[20])
                    .input('id_callreason',sql.Int,values[21])
                    .query(sqlQueries.insertGestion);
        return true;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    setGestion,
}