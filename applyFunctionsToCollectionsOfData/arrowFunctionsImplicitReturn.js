//Implicit return
/*All these functions do the same thing: */

const isEven = function (num) { //regular function exprssion
    return num % 2 === 0;
}
const isEven = (num) => { //arrow function with parens around param
    return num % 2 === 0;
}
const isEven = num => { //no parens around param
    return num % 2 === 0;
}
const isEven = num => { //implicit return
    return num % 2 === 0;

}

const isEven = num => num % 2 == 0; //one-liner implicit return