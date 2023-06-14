const {conectar} = require('./src/ConexionSQL.js')
var express = require('express');

var app = express();


conectar()

module.exports = app;