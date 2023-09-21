'use strict'
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config()
const { parsed } =dotenv.config()
console.log(parsed)


const { PORT,HOST,HOST_URL,SQL_USER,SQL_PASSWORD,SQL_DATABASE,SQL_SERVER } = parsed//process.env;
const sqlEncrypt = process.env.ENCRYPT === "true";
console.log(PORT)
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port:PORT,
    host:HOST,
    url:HOST_URL,
    sql:{
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user:SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
}