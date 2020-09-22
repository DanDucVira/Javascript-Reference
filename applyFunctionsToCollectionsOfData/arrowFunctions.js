//Arrow Functions
/*syntactically compact alternative to a regular function expression */

// const squeare = function (x) {
//     return x * x;
// }

const square = (x) => {
    return x * x;
}

const isEven = (num) => {
    return num % 2 == 0;

}

const multiply = (x, y) => {
    return x * y;
}


//parens are optional if theres only one parameter:
const sum = x => {
    return x * x
}

//Use empty parens for functions w/ no parameters:
const singASong = () => {
    return "LA LA LA LA LA";
}