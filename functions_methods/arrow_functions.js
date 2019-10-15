//regular function
const calcArea = function (radius) {
    return 3.14 * radius ** 2
}
const area = calcArea(5);
console.log("area is:", area);

//arrow function
const calcArea2 = (radius) => {
    return 3.14 * radius ** 2
};
const area2 = calcArea(5);
console.log("area is:", area);