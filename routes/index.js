var express = require('express');
var router = express.Router();

/* GET home page. */
var path = require('path');
router.get('/', function (req, res, next) {
    //res.sendFile(path.join(__dirname, '../public', 'login.html'));
    //res.redirect('/users');
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});
router.post('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});
module.exports = router;
