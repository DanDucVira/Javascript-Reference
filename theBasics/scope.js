//SCOPE


//Global Scope
let food = "apple";
let fruits = 5;


function store() {
    //function scope
    let food = "banana";
    let fruits = 50;
}


//block scope
for (let fruits = 0; fruits < 10; fruits++) {
    console.log(fruits)

}
console.log(food, fruits);