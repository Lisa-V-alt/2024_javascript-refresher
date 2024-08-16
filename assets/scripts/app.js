import { apiKey } from "./util.js"; //*

//displays apiKey from util file in browser console
console.log(apiKey);

//*
////alternative1:
////when import uses default
//import apiKey from "./util.js";

////alternative2:
////when importing multiple files
//import { apiKey, abc } from ".util/js";

////alternative3:
////when importing multiple files as one huge group
//import * as util from "util.js";
//console.log(util.apiKey);

////alternative4:
////when importing multiple files but asigning aliases to them
//import { apiKey, abc as content } from ".util/js";
//console.log(content);

//__________________________________________________________

//display text directly in the console:
console.log("Hello World!!!");
//or make a variable:

//when creating variables, use camelCase, no dashes, no whitespace, few special characters, rarely underscores etc.:
let userMessage = "Hello World!!!";

//displaying text in the console (twice):
console.log(userMessage);
console.log(userMessage);

//can also use constants instead of 'let':
//constants must not be reassigned. only one single constant string can exist.
const userMessage2 = "Hello World (2)!!!";
console.log(userMessage2);

//when displaying math, or merging two strings into one longer string:
console.log(5 + 10); //(this will display as '15')
console.log("hi" + "earth") //(this will display as 'hiearth')
console.log( 10 === 5 ); //triple equal checks for equality. the console will display 'false' (10 is not equal to 5)
console.log( 10 < 10 ); //checks if 10 is greater than 10. the console will display 'true'
if (10 === 10){
    console.log("works")
} //checks if 10 is equal to 10 and then displays 'works' in console if true

//__________________________________________________________

//functions - always use parentheses
//set the function:
function greet() {
    console.log ("Hello!");
}
//call the function:
greet();