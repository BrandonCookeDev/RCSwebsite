var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RCSwebsite');

var teamSchema = mongoose.Schema({
	name: String,
	position: String,
	bio: String,
	picture: String,
	category: String
});

module.exports = mongoose.model('Team', teamSchema, 'team');
