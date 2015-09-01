// File to be used in npm, accesses all data.
var rest = require('restler');
var _ = require('underscore');
var config = require('./config/config');
var uuid = require('uuid');

var url = config.url();
var secretURL = url + '/secret'

var Keyper = {};

Keyper.get = function(keyperKey, cb) {
	// Return all secrets associated w/ given keyperKey
	var queryURL = secretURL + '/' + keyperKey

	rest.get(queryURL).on('complete', function(result) {
		cb(result);
	})
	.on('error', function(err){
		console.log(err)
	})
}

Keyper.remove = function(keyperKey, app, cb) {
	var queryURL = secretURL + '/remove/' + keyperKey + '/' + app;
	
	rest.post(queryURL)
		.on('complete', function(result) {
			cb(result);
		})
		.on('error', function(err){
			console.log(err);
		})

}

Keyper.add = function(keyperKey, app, key, cb) {
	// Add a key to your Keyper.  Pass empty string for keyperKey to generate new key
	if(!keyperKey) {
		keyperKey = Keyper.generateKey();
	}

	var queryURL = secretURL + '/add/' + keyperKey + '/' + app + '?key=' + key;
	
	rest.post(queryURL)
		.on('complete', function(result) {
			cb(result);
		})
		.on('error', function(err){
			console.log(err);
		})
}

Keyper.generateKey = function() {
	key = uuid.v4();
	console.log('Your key is: ' + key + '. Store this somewhere.');
	return key;
}

module.exports = Keyper;
