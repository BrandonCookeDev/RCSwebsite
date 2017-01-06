var crypto  = require('crypto');
var User    = require('../../user/user.model');

var usage = 'USAGE node insertUser.js username password';
if(process.argv.length != 4)
    console.log(usage);

var uname = process.argv[2];
var password = process.argv[3];
var hash = crypto.createHash('sha256').update(password).digest('base64');

var u = new User({
    name: uname,
    password: hash,
    salt: salt
});