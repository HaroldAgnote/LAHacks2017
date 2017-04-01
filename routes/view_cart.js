var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var database = require('../firebase');

    var global_products = '';

    database.getData(function(products){
        global_products = products;
        //console.log(products)

        res.render('view_cart', {
            products : products
        }); 
    })

});

module.exports = router;
