var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var database = require('../firebase');

    database.getData(function(products){

        res.render('userInfo', {
        	
        }); 
    })

});

module.exports = router;
