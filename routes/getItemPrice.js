var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.get("Something");
    var itemID= req.body.ID;
    var items = {
        1 : ["food", 13.25],
        2 : ["food2", 13.22]
    };
    res.send(items[itemID][1]); // items.get(itemID)[1]
    res.end();
});

module.exports = router;
