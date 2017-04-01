var cart = {};

if (localStorage.getItem("cart") == null)
{
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart Empty");
}
else
{
    cart = JSON.parse(localStorage["cart"]);
}
//console.log(typeof cart);
//console.log(cart);

function addToCart(itemID)
{
    if (itemID in cart)
    {
        cart[itemID] = cart[itemID] + 1;
    }
    else
    {
        cart[itemID] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    //console.log(cart);
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
    request.send('cart=' + JSON.stringify(cart));
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

function updateQuantity(key, newQuantity)
{
    cart[key] = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
}

$(".addToCart").click(function (){
    var id = $(this).attr('id');
    //console.log(id);
    addToCart(id);
});
