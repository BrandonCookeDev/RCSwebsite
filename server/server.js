var fs 			= require('fs');
var compression = require('compression');
var express 	= require('express');
var app     	= express();

var common		= require('./common/common');
var api 		= require('./api');
var adminPortal = require('./adminPortalServer');
var log			= require('./log');

var env = process.env.NODE_ENV || 'development';
var port = process.env.RCSwebsitePort;

/** DETERMINE PORTS THE APP SHOULD RUN ON BASED ON THE DEPLOYMENT ENVIRONMENT **/
var webport;
if(!port)
	webport = env == 'production' ? 80 : 8088;
else webport = port;
var adminport = env == 'production' ? 9999 : 9998;
var apiport =  env == 'production' ? 8000 : 8001;

/** COMMON FILE SYSTEM PATHS **/
var ROOT_DIR = __dirname + '/..';
var CLIENT_DIR = ROOT_DIR + '/client';
var APP_DIR = CLIENT_DIR + '/app';
var ADMIN_CLIENT_DIR = ROOT_DIR + '/clientAdminPortal';

/** MINIFY ALL PROJECT JS FILES INTO ONE **/
var minifiedFile = APP_DIR + "/app.min.js";
var jsFiles = common.fromDir(APP_DIR, '.js');
jsFiles = common.sortArrayForAngular(jsFiles);
if(fs.existsSync(minifiedFile)) {
	fs.writeFileSync(minifiedFile, '');
	common.minifyJsFiles(jsFiles, minifiedFile);
}
else
	common.minifyJsFiles(jsFiles, minifiedFile);

/** SET OPTIONS FOR THE SERVER **/
app.use(compression());
app.use(express.static(CLIENT_DIR));
app.use(common.allowCrossDomain);
app.use(logServerError);
api.app.use(logServerError);
adminPortal.app.use(logServerError);

/** CREATE A GLOBAL VARIABLE JS FILE IN THE WEBAPP DIR **/
var GlobalVariableCreator = require('./createGlobalVariables');
GlobalVariableCreator.createGlobalVariables(env, CLIENT_DIR + '/app/globalVariables.js');
GlobalVariableCreator.createGlobalVariables(env, ADMIN_CLIENT_DIR + '/app/globalVariables.js');

var log = require('./log.js');
log.info("Server started! ENV " + env);

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
app.get('/*', function(req, res){
	if(!req.url.includes('/api/'))
		res.sendFile('client/index.html', {root: ROOT_DIR});
});

api.app.listen(apiport);
log.info('	[RCSwebsite API] API listening on port ' + apiport);
console.log('	[RCSwebsite API] API listening on port ' + apiport);

app.listen(webport);
log.info('	[RCSwebsite] Website listening on port ' + webport);
console.log('	[RCSwebsite] Website listening on port ' + webport);

adminPortal.app.listen(adminport);
log.info('	[RCSadmin] Admin Portal listening on port ' + adminport);
console.log('	[RCSadmin] Admin Portal listening on port ' + adminport);

function logServerError(ex, req, res, next){
	log.error(ex.message);
	log.error(ex.stack);
}