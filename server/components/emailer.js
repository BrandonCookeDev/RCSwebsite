var log = require('winston');
var mailer = require('nodemailer');
var transporter = mailer.createTransport('smtps://smtp.mail.yahoo.com');

function sendMail(senderFirstName, senderLastName, senderAddr, receivers, body){

    var mailOptions = {
        from: '"senderFirstName senderLastName" ?" <senderAddr>',
        to: receivers,
        subject: 'Recursion Contact Us', // Subject line
        text: body // plaintext body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error) return log.error(error.message);
        else log.info('Message sent: ' + info.response);
    });
}

module.exports = {
    sendMail : sendMail()
};