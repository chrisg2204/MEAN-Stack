'use strict';

let db = require('../config/db'),
	users = require('./users')(db),
	models = {};

models.users = users;

module.exports = models;