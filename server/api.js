var log         = require('winston');
var bodyParser 	= require('body-parser');
var mongoose	= require('mongoose');
var common      = require('./common/common');

var Team    = require('./models/team/team.model');
var Contact = require('./models/contact/contact.model');
var Mailer  = require('./components/emailer');

mongoose.connect('mongodb://localhost/RCSwebsite');

var express     = require('express');
var app     	= express();

app.use(common.allowCrossDomain);
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/contact/mail', function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var sender = req.body.sender;
    var message = req.body.message;

    emails = [];
    Contact.find({}).lean().exec(function(err, docs){
        if(err) log.error(err.message);
        else log.info(docs);

        docs.forEach(function(email){
            emails.push(email);
        })
    })
    .then(function(){
        var receivers = '';
        emails.forEach(function(email){
            receivers += email.email + ',';
        });
        Mailer.sendMail(firstName, lastName, sender, receivers, message, res);
    })
});

app.get('/api/team/:category', function(req, res){
    var cat = req.params.category;
    var team = [];
    Team.find({ "category" : cat }).lean().exec(function(err, docs){
        if(err) log.error(err.message);
        else log.info(docs);

        docs.forEach(function(member){
            team.push(member);
        });
    })
    .then(function(){
        res.json(team);
    });
});

module.exports = {
    app: app
}