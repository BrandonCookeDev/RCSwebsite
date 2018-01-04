'use strict';

var env = process.env.NODE_ENV || 'dev';
var config = require('./config/config')(env);
var log	= require('./log');

/** INIT THE DATABASE OPTIONS **/
var Mongo = require('./mongo');
Mongo.init();

var _           = require('lodash');
var fs 			= require('fs');
var compression = require('compression');
var express 	= require('express');
var nocache 	= require('nocache');
var app     	= express();

var GlobalVariableCreator = require('./createGlobalVariables');
var adminPortal           = require('./adminPortalServer');
var common		          = require('./common/common');

/** COMMON FILE SYSTEM PATHS **/
var ROOT_DIR = __dirname + '/..';
var CLIENT_DIR = ROOT_DIR + '/client';
var APP_DIR = CLIENT_DIR + '/app';
var ADMIN_CLIENT_DIR = ROOT_DIR + '/clientAdminPortal';

/** CREATE A GLOBAL VARIABLE JS FILE IN THE WEBAPP DIR **/
GlobalVariableCreator.createGlobalVariables(env, CLIENT_DIR + '/app/globalVariables.js');
GlobalVariableCreator.createGlobalVariables(env, ADMIN_CLIENT_DIR + '/app/globalVariables.js');

/** MINIFY ALL PROJECT JS FILES INTO ONE **/
var minifiedFileName = "/app.min.js";
var minifiedFile = APP_DIR + minifiedFileName;
var jsFiles = common.fromDir(APP_DIR, '.js');
jsFiles = common.sortArrayForAngular(jsFiles);
if(fs.existsSync(minifiedFile)) {
    jsFiles = _.reject(jsFiles, function(path){
        return path.includes(minifiedFileName);
    });
    fs.writeFileSync(minifiedFile, '');
    common.minifyJsFiles(jsFiles, minifiedFile);
}
else
    common.minifyJsFiles(jsFiles, minifiedFile);

/** SET OPTIONS FOR THE SERVER **/
app.use(compression());
app.use(express.static(CLIENT_DIR));
app.use(common.allowCrossDomain);
app.use(nocache());
app.use(logServerError);
adminPortal.app.use(logServerError);

/**
 * THIS METHOD AUTOMATICALLY SERVES THE index.html FILE
 * TO ANY REQUEST THAT PASSES THROUGH THIS SERVER. THIS
 * IS TO SERVE ALL DEPENDENCIES TO A REQUEST TO A PAGE THAT
 * IS NOT index.html.
 *
 * Example: A user wants to visit recursion.gg/team, the page
 * will not load correctly unless all the imported dependencies are
 * available. Since this is a single page application, all
 * dependencies are retrieved via index.
 */

log.info("Server started! ENV " + env);

app.get('/*', function(req, res){
    if(!req.url.includes('/api/'))
        res.sendFile('client/index.html', {root: ROOT_DIR});
});

app.listen(config.websitePort);
log.info('	[RCSwebsite] Website listening on port ' + config.websitePort);
console.log('	[RCSwebsite] Website listening on port ' + config.websitePort);

/*
api.app.listen(config.api.port);
log.info('	[RCSwebsite API] API listening on port ' + config.api.port);
console.log('	[RCSwebsite API] API listening on port ' + config.api.port);


adminPortal.app.listen(config.adminPort);
log.info('	[RCSadmin] Admin Portal listening on port ' + config.adminPort);
console.log('	[RCSadmin] Admin Portal listening on port ' + config.adminPort);
*/

function logServerError(ex, req, res, next){
    log.error(ex.message);
    log.error(ex.stack);
}