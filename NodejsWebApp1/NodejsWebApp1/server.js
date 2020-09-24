'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('Index.html', function (err,data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(port);
