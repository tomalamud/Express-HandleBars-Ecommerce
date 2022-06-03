var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title:'MyEcommerce'});
});

router.post('/user', (req, res) => {
    let user = req.body.username;
    res.render('login', {user:user})
    // if (req.body.username == username && req.body.password == password) {
    //     let session = req.session;
    //     session.userid = req.body.username;
    //     console.log(req.session);
    //     res.render('index', { title:'MyEcommerce', user:req.body.username });
    // }
    // res.redirect('/');
  //   var em = req.body.emailInput;
  });

module.exports = router;