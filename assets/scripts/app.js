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
console.log( 10 < 10 ); //checks if 10 is greater than 10
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

//example of function being called with default value (message):
function createGreeting(userName, message = "Hello!"){
    return "Hi, I'm " + userName + ". " + message;
};

const greeting1 = createGreeting("Lisa");
console.log(greeting1);

const greeting2 = createGreeting("Lisa", "Hello, how are you?");
console.log(greeting2);

//__________________________________________________________
////arrow functions:
////this is for an 'anonymous' function:
//export default (userName, message) => {
//    console.log('Hello');
//    return userName + message;
//}

//__________________________________________________________
//inside objects, I can store 'keys':
const user = {
    name: 'Lisa',
    age: 28
};
//i can access individual fields within user, now:
console.log(user.age); //this gives you access to a value within an object

//besides key value pairs, objects can also store functions, called methods
const user2 = {
    name: "Jerry",
    age: 25,
    //method:
    greet() {
        console.log('Hello!');
    }
};
//use method:
console.log(user2.name);
user2.greet();

//inside an object, i can also access the properties of the object, inside the method by using 'this':
const user3 = {
    name: "Squash",
    age: 1,
    greet() {
        console.log("Hello!");
        console.log(this.age); //'this'
    }
}
console.log(user3.name);
user3.greet();

//with class, we can create a blueprint that can be used later to 'make' the object
//class always starts with a capital letter
class User {
    constructor (name, age) { //step 2: constructors used to accept parameters, input values, properties of the object to be used later
        this.name = name;
        this.age = age;
    }

    greet(){ //step 1: this is a 'blueprint' we can use later
        console.log('Hi!');
    }
}
const user1 = new User("Someone", 35); //this object will be based on the 'blueprint' above
console.log(user1);

//__________________________________________________________
//arrays:

