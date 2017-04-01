var express = require('express');

var router = express.Router();
var database = require('../firebase');

router.post('/',function(req,res) {

    var transaction = {};
    var cart = req.body.cart.split(',');
    cart = cleanArray(cart);
    var finalPrice = 0, numItems = 0;
    database.getData(function(products) {
        for(var i = 0; i < cart.length; i++) {
            finalPrice += products[parseInt(cart[i])].itemPrice;
            numItems++; /* Number of Unique Items in the shopping cart */
        }

    transaction.finalPrice = finalPrice;
    transaction.numItems = numItems;
    res.send((transaction.finalPrice).toString());
    });
});

function cleanArray(array)
{
    var newArray = []

    for (var i = 0; i < array.length; i++)
    {
        if (array[i].length != 0)
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

module.exports = router;