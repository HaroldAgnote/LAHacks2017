var express = require('express');

var router = express.Router();
var database = require('../firebase');

router.post('/',function(req,res) {

    var transaction = {};
    var cart = JSON.parse(req.body.cart);
    //console.log(cart);
    var finalPrice = 0, numItems = 0;
    database.getData(function(products) {
        for (var key in cart)
        {
            var base = products[key].itemPrice;
            //console.log(base)
            var multiplier = cart[key];
            //console.log(multiplier);
            finalPrice += base*multiplier;
            numItems++;
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