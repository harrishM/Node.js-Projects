var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var q = url.parse(adr, true);

    var host = q.host;
    var path = q.pathname;
    var search = q.search;
    var q = url.parse(adr, true).query;
    res.write("Host :" + host+"<br/>");
    res.write("Path :" + path + "<br/>");
    res.write("Search :" +search + "<br/>");
    res.write('Month :' + q.month+'<br/>');
    res.write('Year :' + q.year+'<br/>');
    res.end();
}).listen(port);
