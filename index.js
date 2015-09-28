#!/usr/bin/env node
var server = require('./lib/server');
var jade = require('jade');
var bcValuesObservable = require('./lib/bitstamp').observable;
var serverObservable = server.createServer();

const PORT = process.env.PORT || 5000;

// HTTP request event loop function
serverObservable.server.listen(PORT);
console.log('Server listening on port: ' + PORT);

// log the requests
serverObservable
.map(function(data) { return Date() +  ' - ' + data.req.url; })
.subscribe(function(data) { console.log(data); });

var bcValues = {};
bcValuesObservable
.subscribe(function(_bcValues) {
  bcValues = _bcValues;
});

// index requests
server.route(serverObservable, '/')
.subscribe(function(data) {
  var html = jade.compileFile('views/index.jade')(bcValues);
  data.res.end(html);
});

// api requests
server.route(serverObservable, '/api')
.subscribe(function(data) {
  var jsonResponseText = JSON.stringify(bcValues);
  data.res.writeHead(200, {'Content-Type':'application/json'});
  data.res.write(jsonResponseText);
  data.res.end();
});
