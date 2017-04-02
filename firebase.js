/**
 * Created by Harold on 4/1/2017.
 */
var firebase = require('firebase')
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJ-Y6yX9arg3PWUSKDWIvnbC0xBI2rqMM",
    authDomain: "lahacks2017-faca2.firebaseapp.com",
    databaseURL: "https://lahacks2017-faca2.firebaseio.com",
    projectId: "lahacks2017-faca2",
    storageBucket: "lahacks2017-faca2.appspot.com",
    messagingSenderId: "649790841821"
};

console.log("Initializing Firebase")

firebase.initializeApp(config);



console.log("Firebase Initialized!")



module.exports.getData = function(callback) {
    firebase.database().ref("/products/").once('value').then(function(snapshot, product){
    product = snapshot.val();
    //console.log(product)
    callback(product)
})};