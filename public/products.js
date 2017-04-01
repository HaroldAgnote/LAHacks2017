var firebase = require('../firebase');

var database = firebase.database();

var getData = function(callback){ database.ref("/products/").once('value').then(function(snapshot, product){
    product = snapshot.val();
    console.log(product)
    callback(product)
})};

var global_products = ''
getData(function(products){
    global_products = products
})

console.log(global_products)
