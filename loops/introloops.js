//Loops
/*
    --Loops allow us to repeat code:
        -Print hello 10 times
        -Sum all  numbers in an array

    --There are multiple types:
        -for loop
        -while loop
        -for of loop
        -for in loop

*/


// for loop
for ([initialExpression];
    [condition];
    [incrementExpression]) {

}
// for loop example
for (let i = 0; i <= 10; i++) {
    console.log("welcome", i);

}

//for loops + arrays
//To loop over an array,  start at 0 and continue to the last index (length -1 )

const animals = ["cat", "dog", "racoon"];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}