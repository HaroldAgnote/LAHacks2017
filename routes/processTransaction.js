var express = require('express');

var router = express.Router();
var database = require('../firebase');

router.post('/',function(req,res) {

    var transaction = {};
    var cart = req.body.cart.split(','); 
    var finalPrice = 0, numItems = 0;
    database.getData(function(products) {
        for(var i = 0; i < cart.length; i++) {
            finalPrice += products[cart[i]].itemPrice;
            numItems++; /* Number of Unique Items in the shopping cart */
        }

    transaction.finalPrice = finalPrice;
    transaction.numItems = numItems;
    res.send((transaction.finalPrice).toString());
    });
});

module.exports = router;