var common      = require('./common/common');
var bodyParser 	= require('body-parser');
var express     = require('express');
var app     	= express();
var log         = require('./log.js');

var ROOT_DIR = __dirname + '/..';
app.use(express.static(ROOT_DIR + '/clientAdminPortal'));

app.use(common.allowCrossDomain);
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/*', function(req, res){
    if(!req.url.includes('/api/'))
        res.sendFile('client/index.html', {root: ROOT_DIR});
});

module.exports =
    {
        app:app
    };