var readline = require('readline');
var mongoose = require('mongoose');
var Event = require('../models/upcoming/event.model')

mongoose.connect('mongodb://localhost/RCSwebsite');

var event = {
    name : null,
    date : null,
    address : null,
    prereg : null
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Name of Tournament?', function(answer) {
    event.name = answer.toString();

    rl.question('Date of Tournament? XXXX-XX-XX', function(date){
        event.date = date;

        rl.question('Address or Location?', function(address){
            event.address = address;

            rl.question('Prereg Link?', function(link){
                event.prereg = link;


            })
        })
    })
})





