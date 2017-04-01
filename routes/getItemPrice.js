var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Nothing to see here');
});

router.post('/', function(req, res) {
    var itemID = req.body.itemID;
    console.log(req.body);
    var items = {
        1 : ['food', 13.25],
        2 : ['food2', 13.22]
    };
    res.write(JSON.stringify(items[itemID][1]));
    res.end();
    //res.sendStatus(items[itemID][1]); // items.get(itemID)[1]
});

module.exports = router;
