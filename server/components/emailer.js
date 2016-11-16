var log = require('winston');
var mailer = require('nodemailer');

var MailServer = require('../models/contact/mailserver.model');

var transporter = null;
MailServer.find({'type':'main'}).lean().exec(function(err, docs){
    docs.forEach(function(doc){
        transporter = mailer.createTransport(doc.mailserver);
    });
});

function sendMail(senderFirstName, senderLastName, senderAddr, receivers, body, response){

    var mailOptions = {
        from: ''+senderFirstName+' '+senderLastName + ' <' + senderAddr + '>',
        to: receivers,
        subject: 'Recursion: Contact Us', // Subject line
        text: body // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            log.error(error.message);
            response.send(400);
        }
        else{
            log.info('Message sent: ' + info.response);
            response.send(200)
        }
    });
}

module.exports = {
    sendMail : sendMail
};