var winston	= require('winston');
require('winston-daily-rotate-file');
var transport = new winston.transports.DailyRotateFile({
    filename: '/tmp/RCSwebsite',
    datePattern: '.yyyy-MM-dd.log',
    handleExceptions: true,
    json: false,
    level: "warn"
});
var logConsole = new winston.transports.Console({
    handleExceptions: true,
    json: false,
    level: "debug"
});
var log = new (winston.Logger)({
    transports: [
        transport,
        logConsole
    ]
});

module.exports = log;