var firebase = require('../firebase');

var database = firebase.database();

var cart = [];

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


function addToCart(product)
{
    cart.push(product);
}

function removeFromCart(product)
{
    cart.remove(product);
}

function getCart()
{
    return cart;
}

function getItemPrice(itemID) {
    // XmlHttpRequest
    // GET endpoint /getItemPrice
    // return result
}

function getItems(callback) {
    var request = new XMLHttpRequest();

    request.open('POST', '/getItems', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            callback(request.responseText);
        }
        else {
            console.log('There were problems getting the items from the server!');
        }
    };
    request.send();

    // How to use:
    // getItems(function(data) {
	//     // Use variable 'data' here
    // });
}