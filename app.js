'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '/public'));

	app.use(require('./controllers/index')(express));

let serve = app.listen(3000, () => {console.log('serve on!'); });