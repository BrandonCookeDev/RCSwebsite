var fs = require('fs');
var log = require('./log');

function createGlobalVariables(env, path){
    log.info('Creating Global Variable file for ENV: ' + env);
    var config  = require('./config/config')(env);

    var apiPath = env == 'production' ? 'http://' + config.api.host + ":" + config.api.port
                                      : 'http://localhost:'+config.api.port;
    var globalVariables = 'var hostname = \'' + apiPath + '/\';';
    log.info('Writing variables: ' + globalVariables);

    fs.writeFile(path, globalVariables, function(err){
        if(err){
            console.log(err.message);
            return;
        }

        console.log('the file was saved at ' + path);
    })
}

module.exports = {
    createGlobalVariables:createGlobalVariables
};