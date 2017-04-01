var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var database = require('../firebase');

    var global_products = '';

    database.getData(function(products){
        global_products = products;
        //console.log("In JS")
        //console.log(global_products)
        //console.log(Object.keys(global_products))

        var data = [1,2,3,4,5];

        res.render('index', {
            products : products

        });
    })

});

module.exports = router;
