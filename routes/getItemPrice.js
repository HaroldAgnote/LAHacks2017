var express = require('express');
var router = express.Router();
var database = require('../firebase');
router.get('/', function(req, res) {
    res.send('Nothing to see here');
});

router.post('/', function(req, res) {
    var itemID= req.body.itemID;
    database.getData(function(products) {
        res.send((products[itemID].itemPrice).toString());
    });
});

module.exports = router;
