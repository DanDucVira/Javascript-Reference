//OR ||
//(pipe character above enter key) If one side is true the whole thing is true

//only one side needs to be true
1 !== 1 || 10 === 10 //true
10 / 2 === 5 || null //true
0 || undefined //false

let age = 78;

if (age < 6 || age >= 65) {
    console.log("YOU GET IN FOR FREE");
} else {
    console.log("YOU MUST PAYYYY!");
}6