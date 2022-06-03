var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title:'MyEcommerce', email:'' });
});

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('index', { title:'MyEcommerce', email:em });
});

module.exports = router;