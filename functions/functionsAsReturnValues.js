// Functions As Return Values

// function mutiplyBy(num) {
//     return function (x) {
//         return x * num;


//     }

// }

// const triple = mutiplyBy(3);
// const double = multiplyBy(2);


function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0.18);
const isInNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);