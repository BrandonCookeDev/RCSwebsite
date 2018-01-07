var fs = require('fs');
var path = require('path');
var winston	= require('winston');
require('winston-daily-rotate-file');

var config = require('./config/config')(process.env.NODE_ENV || 'dev');

//let filepath = config.log.file.filename + config.log.file.datePattern;
//if(fs.existsSync(filepath))
//    fs.openSync(filepath, 'w');

var transport = new winston.transports.File(config.log.file);
var logConsole = new winston.transports.Console(config.log.console);
var log = new (winston.Logger)({
    transports: [
        transport,
        logConsole
    ]
});

module.exports = log;