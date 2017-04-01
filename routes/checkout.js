var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var database = require('../firebase');

    var global_products = '';

    database.getData(function(products){
        global_products = products;

        res.render('checkout', {
            products : products

        });
    })

});

module.exports = router;
