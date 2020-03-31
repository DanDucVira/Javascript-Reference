//Functions
//Reusable procedures
/*
 --Functions allow us to write reusable, modular code.
 --We define a "chuck" of code that we can then execute at a later point.
 --- We use them ALL THE TIME

 function has 2 step process:  Define ---> Run
*/

//example
function funcName() {
    //do something
}


//dice roll fucntion

function rollDie() {
    //gives a number between 1 to 6
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);



}



//function parameter

function greet(nickname) {
    console.log(nickname);
    console.log("Hi" + nickname);

}
greet("Daniel");


//functions with multiple parameters
function sum(x, y) {
    console.log(x + y);
}

//retrun statement
//Return-- Buil-in methods return values when we call them.

function add(x, y) {
    return x + y;
}

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    } else {
        return false;
    }
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
        return false;
    }
}