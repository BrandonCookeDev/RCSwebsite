var express = require('express');
var app     = express();

var ROOT_DIR = __dirname + '/..';

app.use(express.static(ROOT_DIR + '/client'));
app.listen(process.env.PORT || 8088);