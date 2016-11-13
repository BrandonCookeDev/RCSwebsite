var log		= require('winston');
var express = require('express');
var app     = express();

var Team    = require('./models/team/team.model.js');

var ROOT_DIR = __dirname + '/..';
app.use(express.static(ROOT_DIR + '/client'));

app.get('/api/team/:category', function(req, res){
	var cat = req.params.category;
	var team = [];
	Team.find({ "category" : cat }).lean().exec(function(err, docs){
		if(err) log.error(err);
		else log.info(docs);

		docs.forEach(function(member){
			team.push(member);
		});
	})
	.then(function(){
		res.json(team);
	})
});


console.log('App listening on port 8088');
app.listen(process.env.PORT || 8088);
