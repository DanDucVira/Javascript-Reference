//FOREACH -> Accepts a callback function. Calls the unction once per element in the array.
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];


numbers.forEach(function (num) {
    console.log(num * 2);
});