// FOR LOOPS


for (let i = 0; i < 100; i++) {
    //run some code
}



//prints all the name out of the array
const names = ["Dan", "Sarah", "Logic", "Skyrim"];

// for (let name of names) {
//     console.log(name);
//     console.log(names.indexOf(name));
// }


//SPECIFICALLY FOR ARRAYS
names.forEach(function (name, index) {
    console.log(name, index);
})



const user = {
    name: "john",
    age: 33,
    subscribers: 200,
    money: "yesno"
}


//for objects
for (let x in user) {
    console.log(x);
    console.log(user[x]);
}


//WHILE

let i = 20;

while (i < 30) {
    console.log(i);
    i++;

}

// DO WHILE
let z = 0;
do {
    console.log(z);
    z++;
}
while (z < 10);