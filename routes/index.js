var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    //res.redirect(301, '/storea/inventory');
});

router.get('*', function(req, res, next) {
    res.render('main');
});

module.exports = router;
