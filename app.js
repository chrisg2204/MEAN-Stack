"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    config = require('./config/app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));
app.use(require('./controllers/')(express));
app.set('view engine', 'ejs');

let serve = app.listen(config.PORT, () => {
    console.log(`Serve on!. Port ${config.PORT}`);
});