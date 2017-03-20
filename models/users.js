'use strict';

module.exports = (db) => {
	let mongoose = db.mongoose,
		usersSchema = new db.schema({
			userEmail: {
				type: String, required: [true, 'Email is required']
			},
			userPasswd: {
				type: String, required: [true, 'Password is required']
			},
			userFirstName: {
				type: String, default: ''
			},
			userLastName: {
				type: String, default: ''
			},
			userAddress: {
				type: String, default: ''
			},
		});

		return  mongoose.model('users', usersSchema);

};