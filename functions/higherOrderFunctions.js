//Higer order functions
/*
    Functions that operate on/with other functions. They can:
    *Accpet other functions as arguments
    *Return a function
*/

function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

const divide = function (x, y) {
    return x / y;

}

const operations = [add, subtract, multiply, divide];

//shows function but doesnt call it
console.log(operations[1]);

//runs function
operations[1](100, 4);

for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}