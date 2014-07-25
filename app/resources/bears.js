
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

// list bears service endpoint
resource.list(function(req, res) {
  res.json({"action": "list", "data": "list data from stub"});
});

// read bears service endpoint
resource.read(function(req, res) {
  res.json({"action": "read", "data": "read data from stub"});
});

// create bears service endpoint
resource.create(function(req, res) {
  res.json({"action": "create", "data": "create data from stub"});
});

// update bears service endpoint
resource.update(function(req, res) {
  res.json({"action": "update", "data": "update data from stub"});
});

// delete bears service endpoint
resource.delete(function(req, res) {
  res.json({"action": "delete", "data": "delete data from stub"});
});

module.exports = resource;
