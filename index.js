#!/usr/bin/env node
var server = require('./lib/server');
var jade = require('jade');
var bcValuesObservable = require('./lib/bitstamp').observable;
var serverObservable = server.createServer();

const PORT = process.env.PORT || 5000;

// HTTP request event loop function
serverObservable.server.listen(PORT);
console.log('Server listening on port: ' + PORT);

// log all the requests
serverObservable
.map(function(data) { return Date() +  ' - ' + data.req.url; })
.subscribe(function(data) { console.log(data); });

// index requests
server.route(serverObservable, '/')
.combineLatest(bcValuesObservable, function(data, bcValues) {
  var html = jade.compileFile('views/index.jade')(bcValues);
  data.res.end(html);
})
.subscribe();

// api requests
server.route(serverObservable, '/api')
.combineLatest(bcValuesObservable, function(data, bcValues) {
  var jsonResponseText = JSON.stringify(bcValues);
  data.res.writeHead(200, {'Content-Type':'application/json'});
  data.res.end(jsonResponseText);
})
.subscribe();

// respond to other unmatched urls
serverObservable
.subscribe(function(data) {
  data.res.writeHead(404, {'Content-Type':'text/html'});
  return data.res.end();
});
