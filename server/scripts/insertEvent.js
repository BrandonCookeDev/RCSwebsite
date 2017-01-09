var mongoose = require('mongoose');
var Event = require('../models/upcoming/event.model');

mongoose.connect('mongodb://localhost/RCSwebsite');

var args = process.argv;

if(args.length != 6) {
    console.log("  USAGE: node insertUser.js \<str:name\> \<str:date (MMddYYYY)\> \<str:address\> \<str:preregistration link\>");
    process.exit(1);
}

var name = args[2];
var date = args[3];
var address = args[4];
var prereg = args[5];

var e = new Event({
    name: name,
    date: date,
    address: address,
    prereg: prereg
});

e.save(function(err, event){
    if(err)console.log(err.message);
    else{

    }
});