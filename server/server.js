var log			= require('winston');
var express 	= require('express');
var app     	= express();

var common		= require('./common/common');
var api 		= require('./api');

var port = process.env.RCSwebsitePort || 8088;
var ROOT_DIR = __dirname + '/..';
app.use(express.static(ROOT_DIR + '/client'));
app.use(common.allowCrossDomain);

app.get('/*', function(req, res){
	if(!req.url.includes('/api/'))
		res.sendFile('client/index.html', {root: ROOT_DIR});
});

api.app.listen(8000);
console.log('	[RCSwebsite API] API listening on port ' + 8000);

app.listen(port);
console.log('	[RCSwebsite] App listening on port ' + port);

