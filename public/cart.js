var firebase = require('../firebase');

cart = [];

var database = firebase.database();

var products = database.ref("products");

console.log(products);

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