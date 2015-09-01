# Keyper
Author: Brian Newsom

The days of having to store all of your API keys in environment variables are over.

Keyper is a node module that simplifies storage of API keys.  You will have a single 'keyper key' which will give you access to all of the API keys you care about.

**NOTE:** This module is great for Hackathons, rapid prototypes, etc. but *should not be trusted* for high security applications.

## Usage

### Adding Your First Key
```
var keyper = require('keyper-client');
keyper.add('', 'soundcloud', 'insert_soundcloud_api_key_here', function(res) {
	console.log(res);
})

```
This will log a new 'keyper key' for you.  Be sure to keep track of this key!

### Saving Your Key
We recommend storing your 'keyper key' in environment variables.  Add the following to your .bashrc, .bash_profile, or just type it in for temporary usage.
```
export KEYPER_KEY='new_keyper_key';
```

### Adding Another Key
```
keyper.add(process.env['KEYPER_KEY'], 'facebook', 'insert_facebook_api_key_here', function(res) {
	console.log(res);
})
```

### Retrieving and Using Your Keys
```
var rest = require('restler');

keyper.get(process.env['KEYPER_KEY'], function(keys) {
        // All Application code here
        console.log('My soundcloud key is ' + keys.soundcloud);
        // For example (requires restler) - Gets a list of user ids
        rest.get('http://api.soundcloud.com/users.json?q=alt-j&client_id=' + keys.soundcloud)
                .on('complete', function(users) {
                        console.log('I found some users!');
                        console.log(users);
                })

})
```

### Removing A Key
```
keyper.remove(process.env['KEYPER_KEY'], 'soundcloud', function(res) {
	console.log(res);
})
```

## Contributing

1. Fork it
2. Commit changes
3. Pull request your fork
