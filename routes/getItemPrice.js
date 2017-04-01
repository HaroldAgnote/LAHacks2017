var express = require('express');
var router = express.Router();
var database = require('../firebase');
router.get('/', function(req, res) {
    res.send('Nothing to see here');
});

router.post('/', function(req, res) {
  	// varitemid
  var itemID= req.body.itemID;
  database.getData(function(products) {
      // do something with products
//        console.log(products[itemID].itemPrice);
      res.send((products[itemID].itemPrice).toString());
//        res.send(JSON.stringify(products[itemID].itemPrice.toString));
    });
//    var itemID = req.body.itemID;
//    console.log(req.body);
//    var items = {
//        1 : ['food', 13.25],
//        2 : ['food2', 13.22]
//    };
//    res.write(JSON.stringify(items[itemID][1]));
//    res.end();
    //res.sendStatus(items[itemID][1]); // items.get(itemID)[1]
});

module.exports = router;
