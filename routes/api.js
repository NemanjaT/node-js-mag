var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

/*var db = mongoose.createConnection('mongodb://localhost/test');

//var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("[API] Connection to MongoDB established.");
});*/

/* GET home page. */
router.get('*', function( req, res, next )  {
	if (req.xhr || req.headers.accept.indexOf('json') > -1) {
		next();
	} else {
		var error = [];
		error.status = 500;
		res.status(500).send({
			error: error,
			status: 500,
			message: 'AJAX required!',
			type: 'internal'
		});
	}
});

router.get('/getallphones', function( req, res ) {
	mongoose.model('products').find(function(err, products) {
		res.send(JSON.stringify(products));
	});
	var products = mongoose.model('products');
});

router.get('/getphone/:phoneSlug', function( req, res ) {
	mongoose.model('products').findOne({
		slug: req.params.phoneSlug
	}, function(err, person) {
		if(!err) {
			res.send(JSON.stringify(person));
		} else {
			res.send(err);
		}
	});
});

module.exports = router;