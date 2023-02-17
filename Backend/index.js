'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const sponsorRoutes = require('../Backend/routes/sponsorRoutes');
const policyRoutes = require('../Backend/routes/policyRoutes');
const path = require('path');
const productServiceRoute = require('../Backend/routes/productServiceRoute');
const adressRoutes = require('../Backend/routes/adressRoutes')

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/api',sponsorRoutes.routes)
app.use('/api',policyRoutes.routes)
app.use('/api',productServiceRoute.routes)
app.use('/api',adressRoutes.routes)

app.listen(config.port,() => console.log('Servidor listening on port:' + config.port));

app.use('/assets/',express.static(__dirname + '../../front/assets/'));

app.get('/',(req,res) =>{
    const indexpath = path.join(__dirname, "../front/index.html")
    res.sendFile(indexpath);
})

app.get('/test',(req,res) =>{
    const testpath = path.join(__dirname,'../Front/consolidado.html')
    res.sendFile(testpath);
})


