var mongoose = require('mongoose');
var teamSchema = mongoose.Schema({
	name: String,
	position: String,
	bio: String,
	picture: String,
	category: String
});

module.exports = mongoose.model('Team', teamSchema, 'team');
