var fs = require('fs');
var log = require('./log');

function createGlobalVariables(env, path){
    log.info('Creating Global Variable file for ENV: ' + env);
    var apiPath = env == 'production' ? 'http://138.197.24.51:8000' : 'http://localhost:8001';
    if(env == 'staging')
        apiPath = 'http://138.197.24.51:8001/';

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