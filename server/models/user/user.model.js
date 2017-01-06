var mongoose = require('mongoose');
var usersSchema = mongoose.Schema({
    name: String,
    password: String,
    salt: String
});

module.exports = mongoose.model('User', usersSchema, 'users');