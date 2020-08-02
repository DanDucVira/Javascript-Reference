//Nested for loops


for (let i = 1; i <= 10; i++) {
    console.log("outer Loop", i)
    for (let j = 10; j >= 0; j -= 2) {
        console.log("inner Loop", j);
    }
}