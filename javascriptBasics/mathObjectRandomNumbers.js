// Math Object

/*
Contains properties and methods for mathematical constants and functions
*/

Math.pi //3.141592653589793

//Math.random() gives us a random decimal between 0 and 1(non-inclusive)
//Rounding a number:
Math.round(4.9) //5

//let's gemerate random numbers between 1 and 10
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
Math.floor(Math.random() * 10) + 1;

//Absolute value:
Math.abs(-456) //456

//Raises 2 to the 5 power
Math.pow(2.5) //32

//Removes decimal:
Math.floor(3.9999) //3