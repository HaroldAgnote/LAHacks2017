var cart = [];

if (localStorage.getItem("cart") == null)
{
    localStorage.setItem("cart", cart);
    console.log("Cart Empty");
}
else
{
    cart = localStorage["cart"].replace(/,/g , " ").trim().split(" ");
    cart = cleanArray(cart);
}
console.log(typeof cart);
console.log(cart);

function addToCart(itemID)
{
    cart.push(itemID+" ");
    cart = cleanArray(cart);
    localStorage.setItem("cart", cart);
    console.log(cart);
}

function removeFromCart(product)
{
    cart.remove(product);
}

function getCart()
{
    return cart;
}

function getTotalPrice(cart, callBackFunc) {

    var request = new XMLHttpRequest();

    request.open('POST', '/processTransaction', true);

    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    request.onload = function() {
        if(request.status >= 200 && request.status < 400) {
            callBackFunc(request.responseText);
        }
        else {
            console.log('Failed to load');
        }
        request.onerror = function() {
            console.log('Something wrong with connection');
        }
    }
    request.send('cart=' + cart);
}

function getItemPrice(itemID, callBackFunc) {
    var request = new XMLHttpRequest();

    request.open('POST' , '/getItemPrice', true);

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    request.onload = function(){
        if(request.status >= 200 && request.status<400){
            callBackFunc(request.responseText);
        }
        else{
            console.log("Failed to load");
        }
    };
    request.onerror = function(){
        console.log("Connection Fail");
    }
    request.send('itemID=' + itemID);

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

function cleanArray(array)
{
    var newArray = []

    for (var i = 0; i < array.length; i++)
    {
        if (array[i].length != 0)
        {
            newArray.push(array[i])
        }
    }
    return newArray;
}

$(".addToCart").click(function (){
    var id = $(this).attr('id');
    console.log(id);
    addToCart(id);
});

$("#checkout").click(function () {
    sessionStorage.setItem("cart", cart);
});

function getItem(itemID, callback)
{
    getItems(function(data){
        callback(data[itemID])
    });
}