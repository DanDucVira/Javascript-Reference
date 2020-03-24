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



//function arguments

function greet(nickname) {
    console.log(nickname);
    console.log("Hi" + nickname);

}
greet("Daniel");