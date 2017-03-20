'use strict';
module.exports = (express) => {
	let router = express.Router(),
		models = require('../models/index'),

		userController = require('./userController')(router, models);

	return router;
};