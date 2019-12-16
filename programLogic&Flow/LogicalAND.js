//Logical AND (&&)

//Logical Operators
//&&(and) ||(or) !(not)

// AND (&&)  Both sides must be true in order for the whole thing to be true

1 <= 4 && 'a' === 'a'; //true
9 > 10 && 9 >= 9; //false

'abc'.length === 3 && 1 + 1 === 4; //false


let password = "chickenGal";

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD");
} else {
    console.log("INVALID PASSWORD");
}

let num = 3;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
} else {
    console.log("Please guess a number between 1 and 10");
}