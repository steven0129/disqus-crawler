var express = require('express');
var app = express();
var port = process.env.PORT || 80;

app.get('/', function (req, res) {
  res.send('Hello Everybody!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});