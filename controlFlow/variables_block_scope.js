//variables & block scope
let age = 30;

if (true) {
    age = 40;
    let name = "daniel";
    console.log("inside 1st code block", +age);
}

console.log("Outside code block", +age);