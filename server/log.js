var winston	= require('winston');
require('winston-daily-rotate-file');

var config = require('./config/config')(process.env.NODE_ENV || 'dev');

var transport = new winston.transports.DailyRotateFile(config.log.file);
var logConsole = new winston.transports.Console(config.log.console);
var log = new (winston.Logger)({
    transports: [
        transport,
        logConsole
    ]
});

module.exports = log;