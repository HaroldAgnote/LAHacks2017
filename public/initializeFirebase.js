/**
 * Created by Harold on 4/1/2017.
 */
var firebase = require('../firebase');

function writeProducts(itemID, name, color, price) {
    firebase.database().ref('products/' + itemID).set({
        itemName: name,
        itemColor: color,
        itemPrice: price
    });
}

console.log("Adding Item");

writeProducts(3213, "TestName", "Blue", 2.99);

console.log("Item Added");

console.log("Adding Item");

writeProducts(1232, "Awesome Hat", "White", 3.99);

console.log("Item Added");

console.log("Adding Item");

writeProducts(2313, "Awesome Shirt", "Blue", 4.99);

console.log("Item Added");

console.log("Adding Item");

writeProducts(8523, "Awesome Pants", "Black", 9.99);

console.log("Item Added");

console.log("Adding Item");

writeProducts(1423, "Awesome Jacket", "Red", 12.99);

console.log("Item Added");

console.log("Adding Item");

writeProducts(4134, "Awesome Shoes", "Black", 13.99);

console.log("Item Added");