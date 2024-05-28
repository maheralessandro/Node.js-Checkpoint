var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    res.write( '<h1>Hello Node!!!!</h1>\n');
    res.end(); 
  }).listen(3000);