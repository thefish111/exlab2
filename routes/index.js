var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sum', function(req, res, next) {
  res.render('sum', { title: 'sum' });
});

module.exports = router;