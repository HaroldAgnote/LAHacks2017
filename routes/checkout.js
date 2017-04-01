var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var database = require('../firebase');

    var global_products = '';

    database.getData(function(products){
        global_products = products;
        console.log(products)

        if (req.body.part2) {
            res.render('checkout2', {
                products : products
            });
        }
        else {
            res.render('checkout', {
                products : products
            });
        }
    })

});

module.exports = router;
