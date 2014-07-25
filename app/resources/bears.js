
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

// get all the bears
resource.list(function(req, res) {
	Bear.find(function(err, bears) {
		if (err)
			res.send(err);

		res.json(bears);
	});
});

// get the bear with that id
resource.read(function(req, res) {
	Bear.findById(req.params.id, function(err, bear) {
		if (err)
			res.send(err);
		res.json(bear);
	});
});

// create a bear
resource.create(function(req, res) {
	var bear = new Bear(); 		// create a new instance of the Bear model
	bear.name = req.body.name;  // set the bears name (comes from the request)

	// save the bear and check for errors
	bear.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Bear created!' });
	});
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
