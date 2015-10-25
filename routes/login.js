var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/login', function(req, res, next) {
    console.log("login page");
    if(req.session.username == "bindo"){
        console.log("username: " + req.session.username);
        res.redirect(301, '/storea/inventory');
    }else{
        res.render('login', { title: 'Express' });
    }
});


router.get('/logout', function(req, res, next) {
    console.log("logout page");
    req.session.username = null;
    res.send("logout");
});


router.post('/login', function(req, res) {
    console.log("/login");

    if(req.body.username = "bindo" && req.body.password == "bindo"){

        req.session.username = "bindo";
        console.log("in");
        res.redirect(301, '/storea/inventory');
    }


});




module.exports = router;
