"use strict";

let mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

let connectToMongo = mongoose.connection;
connectToMongo.on('error', console.error.bind(console, 'Error de conexión'));

let db = {};

db.mongoose = mongoose;
db.schema = mongoose.Schema;

module.exports = db;