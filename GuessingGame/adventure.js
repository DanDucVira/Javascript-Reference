//give the user the abillity to guess
//if they guess and they are wrong, ask them again(hint)
//if they win - say they won

function guessGame() {
    let randomNum = Math.floor(Math.random() * 11);
    let guess;


    do {
        guess = prompt("Guess a number between 1-10");
        console.log(guess, randomNum);
        if (randomNum > guess) {
            console.log("You guessed to low");
        } else if (randomNum < guess) {
            console.log("You guessed to high");
        }
    } while (guess != randomNum);
    console.log("you won");

}
guessGame();