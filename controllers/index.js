"use strict";

module.exports = (express) => {
    let router = express.Router(),

        userController = require('./userController')(router);

    return router;
    
};