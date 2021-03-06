var express = require('express');

var app = express();
var directory = '/' + (process.env.STATIC_DIR || 'build')
app.use(express.static(__dirname + directory));
app.use('*', express.static(__dirname + directory));

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Listening on', port);
});