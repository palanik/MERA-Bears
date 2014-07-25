
/**
 * Module dependencies.
 */
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/bears'); // connect to our database

var Bear     = require('../models/bears');

var restpress = require('restpress');

// Create a RESTful resource
var resource = new restpress('bears', require('./bears-actions.json'));

resource.all(function(req, res, next) {
	console.log('Something is happening.');
	next();
});



module.exports = resource;
