//CONDITIONALS
//Making decisions with code

//Example 1

//IF STATEMENT
let rating = 3;

if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR!');
}

//ELSE IF
let rating = 2;
if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR!');
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}


//ELSE

let rating = -99;
if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
    console.log("NEEDS IMPORVEMENT");
} else {
    console.log("INVALID RATING");
}

//Example 

let hightScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    hightScore = userScore;
} else {
    console.log(`Good Game, Your Score of ${userScore} did not beat the high score of ${highScore}`);
}