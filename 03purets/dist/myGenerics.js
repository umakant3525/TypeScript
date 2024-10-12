"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
// here we used our own type of the class
// identityFour<Bootle>({})
// here i real time uses 
function getSearchProducts(products) {
    // here we are doing operations on the array and returning the one element in the output
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // here we are using the arrow functions 
    // here we are doing operations on the array and returning the one element in the output
    const myIndex = 4;
    return products[myIndex];
};
// my functions 
function myFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
console.log(myFunction(1, "1"));
// 
function myFunction1(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
console.log(myFunction1(true, 1));
// free fill to make this type of functions 
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
