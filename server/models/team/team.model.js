var mongoose = require('mongoose');
var ResultSchema = mongoose.Schema({
	name: String,
	place: Number
});

var TeamSchema = mongoose.Schema({
	name: String,
	position: String,
	bio: String,
	picture: String,
	category: String,
	results: [ResultSchema]
});

module.exports = mongoose.model('Team', TeamSchema, 'team');
