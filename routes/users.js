var express = require('express');
var router = express.Router();
/* GET users listing. */
var path = require('path');
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

module.exports = router;
