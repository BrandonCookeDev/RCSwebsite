var express 	= require('express');
var app     	= express();

var common		= require('./common/common');
var api 		= require('./api');

var adminPortal = require('./adminPortalServer');

var port = process.env.RCSwebsitePort || 8088;
var ROOT_DIR = __dirname + '/..';
app.use(express.static(ROOT_DIR + '/client'));
app.use(common.allowCrossDomain);

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

var winston	= require('winston');
require('winston-daily-rotate-file');
var transport = new winston.transports.DailyRotateFile({
	filename: './logs/RCSwebsite',
	datePattern: '.yyyy-MM-dd.log',
	handleExceptions: true
});
var log = new (winston.Logger)({
	transports: [
		transport
	]
});
log.info("Server started!");

app.get('/*', function(req, res){
	if(!req.url.includes('/api/'))
		res.sendFile('client/index.html', {root: ROOT_DIR});
});

api.app.listen(8000);
console.log('	[RCSwebsite API] API listening on port ' + 8000);

app.listen(port);
console.log('	[RCSwebsite] Website listening on port ' + port);

adminPortal.app.listen(9999);
console.log('	[RCSwebsite] Admin Portal listening on port ' + 9999);