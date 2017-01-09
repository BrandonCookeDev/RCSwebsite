var log         = require('winston');
var bodyParser 	= require('body-parser');
var mongoose	= require('mongoose');
var common      = require('./common/common');

var Team    = require('./models/team/team.model');
var Contact = require('./models/contact/contact.model');
var Events  = require('./models/upcoming/event.model');
var User    = require('./models/user/user.model');
var Tournaments = require('./models/tournaments/tournament.model');
var Mailer  = require('./components/emailer');

mongoose.connect('mongodb://localhost/RCSwebsite');

var express     = require('express');
var app     	= express();
var session     = require('express-session');

app.use(common.allowCrossDomain);
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
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

app.get('/api/events', function(req, res){
    var date = new Date();
    var endDate = null;

    var events = [];
    Events.find({ "date" : { $gte : date }}).lean().exec(function(err, docs){
        if(err) log.error(err.message);
        else log.info(docs);

        docs.forEach(function(event){
            events.push(event)
        })
    })
    .then(function(){
        res.json(events);
    })
});

app.delete('/api/events', function(req, res){

});

app.post('/api/events', function(req, res){
    var name = req.body.name;
    var date = req.body.date;
    var addr = req.body.addr;
    var prereg = req.body.prereg;

    var e = new Events({
        name: name,
        date: date,
        address: addr,
        prereg: prereg
    });

    e.save(function(err, event){
        if(err){
            log.error(err.message);
            res.send(400);
        }
        log.info('Successfully saved event! \n' + event.toString());
        res.send(200);
    })
});

app.get('/api/events/:date', function(req, res){
    var dateStr = req.params.date;
    var dateRegex = new Regex("/^\d{2}-\d{2}-\d{4}$/");

    if(!dateStr.match(dateRegex)){
        //TRY TO FORMAT
    }

    var date = new Date(Date.parse(dateStr));
    var endDate = null;

    if(!date)
        date = new Date();

    var events = [];
    Events.find({ "date" : { $gte : date }}).lean().exec(function(err, docs){
        if(err) log.error(err.message);
        else log.info(docs);

        docs.forEach(function(event){
            events.push(event)
        })
    })
    .then(function(){
        res.json(events);
    })
});

app.get('/api/tournaments/:name', function(req, res){
    var name = req.params.name;

    Tournaments.Tournament.findOne({"name":name}).lean().exec(function(err, docs){
        if(err) log.error(err.message);
        else log.info(docs);

        res.json(docs);
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

app.get('/api/user/:name', function(req, res){
    var uname = req.params.name;

    var user = null;
    User.find({'name':name}).lean().exec(function(err, docs){
        if(err) {
            log.error(err.message);
            res.sendStatus(403);
            return;
        }

        user = docs[0];
    })
    .then(function(){
        res.json(user);
    })
});

app.post('/api/user/login', function(req, res){
    var uname = req.body.uname;
    var upass  = req.body.upass;

    var user = null;
    User.find({'name':uname}).lean().exec(function(err, docs){
        if(err){
            log.error(err.message);
            res.sendStatus(403);
            return;
        }

        user = docs[0];
    })
    .then(function(){
        common.verifyPassword(user.hashedPassword, user.salt, user.iterations, upass)
            .then(function(isAuthorized){
                if(isAuthorized){
                    req.session.user = user.name;
                    req.session.admin = true;
                    res.json(user);
                    res.end();
                }
                else res.sendStatus(403);
            })
    })
});

app.delete('/api/user/logout', function(req, res){
    req.session.destroy();
    res.send("logout success!");
});

module.exports = {
    app: app
};
