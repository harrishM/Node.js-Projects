'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var events = require('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {
    var handler= function(){
        console.log("Event has happened");
    }
    eventEmitter.on('hello', handler);
    eventEmitter.emit('hello');

}).listen(port);
