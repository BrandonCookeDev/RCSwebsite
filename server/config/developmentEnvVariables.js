module.exports = function() {
    process.env.NODE_ENV = 'development';
    process.env.RCSWebsitePort  = 8088;
    process.env.RCSAdminPort    = 9998;
    process.env.RCSApiHost      = 'localhost';
    process.env.RCSApiPort      = 8001;

    //process.env.MongoUser       = null;
    //process.env.MongoPwd        = null;
    process.env.MongoHost       = 'localhost/RCSwebsite';

    process.env.LogFileName             = './logs/RCSwebsite';
    process.env.LogFileLevel            = 'warn';
    process.env.LogFileJson             = false;
    process.env.LogFileHandleException  = true;
    process.env.LogFileColorize         = false;

    process.env.LogConsoleLevel             = 'info';
    process.env.LogConsoleJson              = false;
    process.env.LogConsoleColorize          = true;
    process.env.LogConsoleHandleExceptions  = true;
};