//FOREACH -> Accepts a callback function. Calls the function once per element in the array.
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];


numbers.forEach(function (num) {
    console.log(num * 2);
});

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);