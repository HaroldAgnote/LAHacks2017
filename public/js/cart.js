var cart = [];

function addToCart(itemID)
{

}

function removeFromCart(product)
{
    cart.remove(product);
}

function getCart()
{
    return cart;
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


$(".addToCart").click(function (){
    var id = $(this).attr('id');

});