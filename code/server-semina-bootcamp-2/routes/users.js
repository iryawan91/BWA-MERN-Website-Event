var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Ini respon nodemon loh!');
});

module.exports = router;
