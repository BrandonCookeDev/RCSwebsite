var log      = require('winston');
var common   = require('../common/common');
var mongoose = require('mongoose');
var User     = require('../models/user/user.model');

mongoose.connect('mongodb://localhost/RCSwebsite');

var usage = 'USAGE node insertUser.js username password';
if(process.argv.length != 4)
    console.log(usage);

var uname = process.argv[2];
var password = process.argv[3];
common.hashPassword(password)
    .then(function(data){
        var hash = data;

        var u = new User({
            name: uname,
            hashedPassword: hash.hashedPassword,
            iterations: hash.iterations,
            salt: hash.salt
        });

        u.save(function(err, user){
            if(err) log.error(err.message);
            else log.info('User Successfully Saved: ' + user.name);
            process.exit(0);
        });
    });

