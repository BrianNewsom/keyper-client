// Just an example file to show how using Keyper will work
keyper = require('../keyper');

// get keyper key from environment variables, or default to 12345
var keyperKey = process.env['KEYPER_KEY'] || '12345';

keyper.get(keyperKey, function(keys){
	console.log(keys);
	// The rest of your application will go here :)
})