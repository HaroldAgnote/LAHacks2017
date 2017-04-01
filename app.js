
var app = require('express');
var ejs = require('ejs')
var bodyparser = require('body-parser');

var getItemPrice = require('./routes/getItemPrice');


app.set('view engine', 'ejs')
app.use(bodyparser.json());
app.use('/getItemPrice', getItemPrice);

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})