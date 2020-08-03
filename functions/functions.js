//Functions
/*
* functions allow us to write reusable, modular code
*we define a "chunk" of code that we can then execute at a later point.
*we use them all the time.

*/

function funcName() {
    //do something
}

//example
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);

}
rollDie();



//function arguments

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Daniel");


//functions with multiple arguments

function sum(x, y) {
    console.log(x + y);
}
sum(4, 6);


function divide(a, b) {
    console.log(a / b);

}
divide(10, 5);

//return statement
/*
Build-in methods return values when we call them.
We can capture a return value in a variable.
The return statement ends function execution and specifies the value to be returned by the function.
 */

function add(x, y) {
    return x + y;

}
const sum = add(2, 2);
sum; //4


function isGreen(color) {
    return color.toLowerCase() === "green";
}