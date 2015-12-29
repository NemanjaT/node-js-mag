var express = require('express');
var path    = require('path');
var router  = express.Router();

/* GET home page. */
router.get('/index', function (req, res, next) {
    res.sendFile(path.join(__dirname + '\\..\\views\\index.html'));
    //res.render('index');
});

router.get('*', function (req, res, next) {
    console.log(__dirname + '\\views\\index.html');
    res.sendFile(path.join(__dirname + '\\..\\views\\index.html'));
    //res.render('index');
});

module.exports = router;
