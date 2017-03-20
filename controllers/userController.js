'use strict';

let auth = require('../middleware/authorizeRequest'),
	crypto = require('crypto');

module.exports = (router, models) => {

	auth.authorize(router);

	router.get('/', (req, res) => {
		res.render('../public/index');
	});

	router.post('/users', (req, res) => {
		let body = req.body,
			user = new models.users;

			user.userEmail = body['userEmail'];
			user.userPasswd = crypto.createHash('md5').update(body['userPasswd']).digest("hex");

			user.save((err, created) => {
				if (!err) {
					res.status(200).json(created);
				} else {
					res.status(500).json(err);
				}
			});
		});

	router.get('/users', (req, res) => {
		let user = models.users;
		user.find({}, (err, allUsers) => {
			if (!err) {
				res.status(200).json(allUsers);
			} else {
				res.status(500).json(err)
			}
		});
	});

};