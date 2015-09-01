# Keyper
Author: Brian Newsom

The days of API keys in environment variables are over.

Keyper is a node module that simplifies storage of API keys.  You will have a single 'keyper key' which will give you access to 
all of the API keys you care about.

This module contains both the server and the access library.  These will likely be separated soon.

## Usage

### Adding Your First Key
```
var keyper = require('keyper');
keyper.add('', 'soundcloud', 'this_is_your_soundcloud_api_key', function(res) {
	console.log(res);
})

```
This will log a new 'keyper key' for you.  Be sure to keep track of this key!

### Saving Your Key
We recommend storing your 'keyper key' in environment variables.  Add the following to your .bashrc, .bash_profile, or just type it in for temporary usage.
```
export KEYPER_KEY='outputted_keyper_key'
```

### Adding Another Key
```
keyper.add(process.env['KEYPER_KEY'], 'soundcloud', 'this_is_your_soundcloud_api_key', function(res) {
	console.log(res);
})
```

### Retrieving Your Keys
```
keyper.get(process.env['KEYPER_KEY'], function(keys) {
	// Application code here
	console.log('My soundcloud key is ' + keys.soundcloud);
	
})
```

### Removing A Key
```
keyper.get(process.env['KEYPER_KEY'], 'soundcloud', function(res) {
	console.log(res);
})
```

## Contributing

1. Fork it
2. Commit changes
3. Pull request your fork
