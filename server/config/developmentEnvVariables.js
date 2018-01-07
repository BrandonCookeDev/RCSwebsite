var fs = require('fs');
var path = require('path');
var logfile = path.join(__dirname, '../logs/RCSwebsite.log');

if(!fs.existsSync(logfile))
    fs.openSync(logfile, 'w');

module.exports = function() {
    process.env.NODE_ENV = 'development';
    process.env.RCSWebsitePort  = 8081;
    process.env.RCSAdminPort    = 9998;

    process.env.RCSApiHost      = 'localhost';
    process.env.RCSApiPort      = 8000;

    //process.env.MongoUser       = null;
    //process.env.MongoPwd        = null;
    process.env.MongoHost       = 'localhost/RCSwebsite';

    process.env.LogFileName             = logfile;
    process.env.LogFileLevel            = 'debug';
    process.env.LogFileJson             = false;
    process.env.LogFileHandleException  = true;
    process.env.LogFileColorize         = false;

    process.env.LogConsoleLevel             = 'debug';
    process.env.LogConsoleJson              = false;
    process.env.LogConsoleColorize          = true;
    process.env.LogConsoleHandleExceptions  = true;
};