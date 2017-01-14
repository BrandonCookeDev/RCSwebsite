var fs = require('fs');

function createGlobalVariables(env, path){
    var apiPath = env == 'production' ? 'http://138.197.24.51:8000/' : 'http://localhost:8001';
    if(env == 'staging')
        apiPath = 'http://138.197.24.51:8001/';

    var globalVariables = 'var hostname = \'' + apiPath + '/\';';

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