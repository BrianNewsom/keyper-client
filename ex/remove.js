// Adding a key to Keyper using lib
keyper = require('../keyper');

// get keyper key from environment variables, or default to 12345
var keyperKey = process.env['KEYPER_KEY'] || '12345';
var app = 'google';

keyper.remove(keyperKey, app, function(res){
	console.log(res);
})

