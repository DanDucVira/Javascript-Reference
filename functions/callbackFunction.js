//Callback Functions

/*
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function.
*/

// function grumpus() {
//     alert("Go Away!");
// }
// //setTimeout is a timer look MDN
// setTimeout(grumpus, 5000);



setTimeout(function () {
    alert("Welcome");
}, 5000);