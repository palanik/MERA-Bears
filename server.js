// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');

var app        = express(); 	// define our app using express
var bodyParser = require('body-parser');

// Resources
var bears = require('./app/resources/bears');


var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8080; 		// set our port

// Inject resources into app
bears.app('/api/', app);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Restpress server (via Express) listening on port ' + port);
