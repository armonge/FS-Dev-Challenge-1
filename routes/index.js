var express = require('express');
var router = express.Router();

var bcObservable = require('../lib/bitstamp').observable;

/* GET home page. */
router.get('/', function(req, res, next) {
  bcObservable
  .subscribe(function(bcData) {
    res.render('index', { title: 'Bitcoin Status', bcData: bcData });
  });
});

module.exports = router;
