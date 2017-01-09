var log      = require('winston');
var mongoose = require('mongoose');
var common   = require('../../common/common');
var Users    = require('../../models/user/user.model.js');

mongoose.connect('mongodb://localhost/RCSwebsite');

//REPLACE THESE WITH WHATEVER IS IN THE DB YOU'RE TRYING TO VALIDATE
var name = process.argv[2];
var pass = process.argv[3];

user = null;
Users.find({'name':name}).lean().exec(function(err, docs){
    if(err)log.error(err.message);
    else {
        log.info('got user info: ' + docs.toString());
        user = docs[0];
    }
}).then(function(){
    console.log(user.name);
    common.verifyPassword(user.hashedPassword, user.salt, user.iterations, pass).then((data)=>{console.log(data); process.exit(0)});
});

