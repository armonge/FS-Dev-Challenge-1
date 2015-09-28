var Rx = require('rx');
var rxGet = require('rx-http-client').getJSON;
var _ = require('lodash');

const BITSTAMP_UPDATE_DELAY = 10; // 10 seconds

// update the bitcoin values on an interval
var bcValuesObservable = Rx.Observable.interval(1000 * BITSTAMP_UPDATE_DELAY)
.startWith(null) // start inmediately
.flatMap(function() { return rxGet('http://www.bitstamp.net/api/ticker/'); })
.retry() // in case of api errors just retry
.scan(function(acc, response) {
  var last = parseFloat(response.last, 10);
  if (last !== _.last(acc)) {
    acc.push(last);
    acc = _.takeRight(acc, 5);
  }

  console.log(acc);
  return acc;
}, [])
.map(function(bcValues) {
  return {
    last: _.last(bcValues),
    average: _.reduce(bcValues, function(total, n) { return total + n; }) / bcValues.length,
  };
});

exports.observable = bcValuesObservable;
