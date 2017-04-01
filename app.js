var express = require('express');
var app = express();
var ejs = require('ejs');

var firebase = require('./firebase');

var cart = require('./public/cart')

var index = require('./routes/processtransaction');
app.use('/process',index);

var bodyParser = require('body-parser');

var getItemPrice = require('./routes/getItemPrice');


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/getItemPrice', getItemPrice);

app.get('/', function (req, res) {
  res.render('index');

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})