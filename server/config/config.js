
module.exports = function(mode){
    if(mode != 'production') require('./developmentEnvVariables')();

    var config = {
        deploymentMode: process.env.NODE_ENV,
        websitePort: process.env.RCSWebsitePort,
        adminPort: process.env.RCSAdminPort,
        api: {
            host: process.env.RCSApiHost,
            port: process.env.RCSApiPort,
        },
        mongo:{
            user: process.env.MongoUser,
            pwd: process.env.MongoPwd,
            host: process.env.MongoHost
        },
        log:{
            file:{
                filename: process.env.LogFileName,
                datePattern: '.yyyy-MM-dd.log',
                level: process.env.LogFileLevel,
                json: process.env.LogFileJson == 'true',
                handleException: process.env.LogFileHandleException == 'true',
                colorize: process.env.LogFileColorize == 'true'
            },
            console:{
                level: process.env.LogConsoleLevel,
                json: process.env.LogConsoleJson == 'true',
                handleException: process.env.LogConsoleHandleException == 'true',
                colorize: process.env.LogConsoleColorize == 'true'
            }
        }
    };

    return config;
};