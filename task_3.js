var http = require('http');
var fs = require('fs');
var url = require('url');

var data = fs.readFileSync('welcome.txt');

console.log(data.toString());