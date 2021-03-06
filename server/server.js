'use strict';

var env = process.env.NODE_ENV || 'dev';
var config = require('./config/config')(env);

/** SETUP LOGGING **/
var log        = require('winston');
var transports = config.log;
log.remove(log.transports.Console);
log.add(log.transports.Console, transports.console);
log.add(log.transports.File, transports.file);

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
var ADMIN_CLIENT_DIR = ROOT_DIR + '/adminClient';

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

app.listen(8081);
log.info('	[RCSwebsite] Website listening on port ' + 8081);

//app.listen(9999);
//log.info('  [RCSadmin] Website listening on port ' + 9999);

/** INIT API **/
require('./api/server');

/*
api.app.listen(config.api.port);
log.info('	[RCSwebsite API] API listening on port ' + config.api.port);


adminPortal.app.listen(config.adminPort);
log.info('	[RCSadmin] Admin Portal listening on port ' + config.adminPort);
*/

function logServerError(ex, req, res, next){
    log.error(ex.message);
    log.error(ex.stack);
}