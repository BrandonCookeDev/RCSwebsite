var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/RCSwebsite');

var contactSchema = mongoose.Schema({
    email: String
});

module.exports = mongoose.model('Contact', contactSchema, 'contact');