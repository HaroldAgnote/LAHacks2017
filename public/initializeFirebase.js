/**
 * Created by Harold on 4/1/2017.
 */
var firebase = require('../firebase');

function writeProducts(itemID, name, color, price, imageURL) {
    firebase.database().ref('products/' + itemID).set({
        itemName: name,
        itemColor: color,
        itemPrice: price,
        itemImageURL: imageURL
    });
}

console.log("Adding Item");

writeProducts(1232, "Awesome Hat", "White", 3.99, "/images/awesomeHat.jpg");

console.log("Item Added");

console.log("Adding Item");

writeProducts(2313, "Awesome Shirt", "Blue", 4.99, "/images/shirt.jpg");

console.log("Item Added");

console.log("Adding Item");

writeProducts(8523, "Awesome Pants", "Black", 9.99, "/images/pants.jpg");

console.log("Item Added");

console.log("Adding Item");

writeProducts(1423, "Awesome Jacket", "Red", 12.99, "/images/awesomeJacket.jpg");

console.log("Item Added");

console.log("Adding Item");

writeProducts(4134, "Awesome Shoes", "Black", 13.99, "/images/shoes.jpg");

console.log("Item Added");