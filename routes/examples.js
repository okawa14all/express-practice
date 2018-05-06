var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var param = { "hoge": "example"  };
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

router.get('/hello/:name', function(req, res, next) {
  var param = { "result": "hello " + req.params.name }
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

router.get('/greet/:name', function(req, res, next) {
  var param = { "result": req.query.greet + " " + req.params.name }
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});

module.exports = router;
