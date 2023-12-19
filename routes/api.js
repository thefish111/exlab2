var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', function(req,res,next){
  res.send({ 'result':parseInt(req.query.a)+parseInt(req.query.b)})
});

router.post('/sum',function(req, res,next){
  res.render("sum", {'result':parseInt(req.body.a)+parseInt(req.body.b), title: 'sum'})
})

module.exports = router;
