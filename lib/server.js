var Rx = require('rx');
var http = require('http');

// taken from http://stackoverflow.com/questions/10407318/rxjs-node-js-http-server-implementation
exports.createServer = function() {
  var subject = new Rx.Subject();
  var observable = subject.asObservable();
  observable.server = http.createServer(function(request, response) {
    subject.onNext({req: request, res: response});
  });

  return observable;
};
