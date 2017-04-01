var bodyParser = require('body-parser');
var express = require('express');
var ejs = require('ejs');
var path = require('path')

var app = express();

var firebase = require('./firebase');

app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
var getItems = require('./routes/getItems');
var getItemPrice = require('./routes/getItemPrice');
var processTransaction = require('./routes/processTransaction');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/getItems', getItems);
app.use('/getItemPrice', getItemPrice);
app.use('/processTransaction', processTransaction);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});