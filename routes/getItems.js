var express = require('express');
var router = express.Router();

var database = require('../firebase');

router.post('/', function(req, res) {
    database.getData(function(products) {
        res.json(products);
    });
});

module.exports = router;
