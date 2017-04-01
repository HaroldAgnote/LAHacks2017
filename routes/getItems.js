var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var items = {
        1 : ['food', 13.25],
        2 : ['food2', 13.22]
    };
    res.json(JSON.stringify(items));
});

module.exports = router;
