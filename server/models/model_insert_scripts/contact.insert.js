var mongoose = require('mongoose');
var Contact = require('../contact/contact.model');

mongoose.connect('mongodb://localhost/RCSwebsite');

var c1 = new Contact({ email: 'bcooke91@gmail.com' });
var c2 = new Contact({ email: 'recursiongg@gmail.com' });

c1.save(function(err, c1){
    if(!err) console.log('Successfully inserted C1!');
    else console.log(err.message);
});

c2.save(function(err, c2){
    if(!err) console.log('Successfully inserted C2!');
    else console.log(err.message);
});