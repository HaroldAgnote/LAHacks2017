var express = require('express');

var router = express.Router();

router.get('/',function(req,res) {

        var transaction = {};
        var cart = [1,2];
        var finalPrice = 0, numItems = 0;


        var items = {

        '1': ['pepsi',13.33,3],
        '2': ['cheetos',.10,4]

    }

    for(var i = 0; i < cart.length; i++) {

        if(items[cart[i]][2] > 1) {
            var j = items[cart[i]][2];
            finalPrice += (items[cart[i]][1] * j);
        }

        else
            finalPrice += items[cart[i]][1];
        numItems++; /* Number of Unique Items in the shopping cart */

    }

    transaction.finalPrice = finalPrice;
    transaction.numItems = numItems;

    res.json(JSON.stringify(transaction));
});

module.exports = router;