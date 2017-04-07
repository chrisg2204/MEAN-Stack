"use strict";

let models = require('../models'),
    crypto = require('crypto'),
    auth = require('../middleware/authorizeMiddleware');

module.exports = (router) => {
    router.get('/', (req, res) => {
        res.render('../public/table');
    });

    auth.authorize(router);

    router.post('/users', (req, res) => {
        let body = req.body;
        if (body.userEmail !== '' && body.userFirstName !== '' && body.userLastName !== '') {
            if (body.userPasswd === body.userPasswdConfirm) {
                let user = new models.users();
                user.userLogin = body.userEmail;
                user.userEmail = body.userEmail;
                user.userPasswd = crypto.createHash('md5').update(body.userPasswd).digest('hex');
                user.userFirstName = body.userFirstName;
                user.userLastName = body.userLastName;

                user.save((err, userCreated) => {
                    if (!err) {
                        res.status(200).json(userCreated);
                    } else {
                        res.status(500).json(err);
                    }
                });
            } else {
                res.status(400).json('Password not equal');
            }
        } else {
            res.status(400).json('Body incomplete.');
        }
    });

    router.get('/users', (req, res) => {
        let user = models.users;
        user.find({}, (err, allUsersFinded) => {
            if (!err) {
                if (allUsersFinded.length) {
                    res.status(200).json(allUsersFinded);
                } else {
                    res.status(404).json('data not found');
                }
            } else {
                res.status(500).json(err);
            }
        });
    });

};