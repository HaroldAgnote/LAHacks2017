var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var firebase = require('../firebase');

    var database = firebase.database();

    var getData = function(callback){ database.ref("/products/").once('value').then(function(snapshot, product){
        product = snapshot.val();
        //console.log(product)
        callback(product)
    })};

    var global_products = ''

    getData(function(products){
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
