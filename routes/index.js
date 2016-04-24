var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', multer().single('upl'), function(req, res, next) {
  console.log('file', req.file.size);
  res.json("Your file size is " + req.file.size);
});

module.exports = router;
