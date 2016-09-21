'use strict';

var express = require('express'),
    http = require('http'),
    events = require('events'),
    _ = require('underscore'),
    sanitize = require('validator').sanitize;
var app = express(),
    server = http.createServer(app);
    server.listen(conf.port);
    
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/static'));
});
var logger = new events.EventEmitter();
logger.on('newEvent', function(event, data) {
    console.log('%s: %s', event, JSON.stringify(data));
});
var requireAuthentication = function(req, res, next) {
    next();
};
app.get('/', function(req, res) {
    res.send(200, "Welcome to chat server");
})
