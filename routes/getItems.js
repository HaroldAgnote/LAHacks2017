var express = require('express');
var router = express.Router();

var database = require('../firebase');

router.post('/', function(req, res) {
    var itemID = '';
    if (req.body.itemID) {
        itemID = req.body.itemID;
    }
    database.getData(function(products) {
        if (itemID !== '') {
            res.json(products[itemID]);
        }
        else {
            res.json(products);
        }
    });
});

module.exports = router;
