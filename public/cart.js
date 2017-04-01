var firebase = require('../firebase');

var database = firebase.database();

var cart = [];

function getProducts(product)
{
    database.ref("/products/").once('value').then(function(snapshot, product){
        product = snapshot.val();
        return product;
    });
}

var products;
getProducts(products);

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