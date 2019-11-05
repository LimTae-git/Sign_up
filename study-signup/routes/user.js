var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET users listing. */
router.get('/sign_up', function(req, res, next) {
  res.render('user/signup');
});

router.post("/sign_up", function(req, res, next){
  let body = req.body;

  models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: body.password
  })
  .then( result => {
    res.redirect("/users/sign_up");
  })
  .catch( err => {
    console.log(err)
  })
})

module.exports = router;
