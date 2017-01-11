var winston	= require('winston');
require('winston-daily-rotate-file');
var transport = new winston.transports.DailyRotateFile({
    filename: './logs/RCSwebsite',
    datePattern: '.yyyy-MM-dd.log',
    handleExceptions: true
});
var log = new (winston.Logger)({
    transports: [
        transport
    ]
});

module.exports = log;