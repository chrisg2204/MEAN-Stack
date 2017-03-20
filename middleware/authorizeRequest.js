'use strict';

class AuthorizeRequest {

	constructor() {}

	authorize(router) {
		router.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
			res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
			next();
		});
	}
};

module.exports = new AuthorizeRequest();