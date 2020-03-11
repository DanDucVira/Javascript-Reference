let j = 0;
while (j <= 5) {
    console.log(j);
    j++;

}
//0
//1
//2
//3
//4
//5

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);