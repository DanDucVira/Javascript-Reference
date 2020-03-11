//For of loop
//no internet explorer support

let subreddits = ['soccer', 'books', 'video Games', 'VR'];

//for loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);

}
//for of loop
for (let sub of subreddits) {
    console.log(sub);
}

for (let char of 'Hello everyone') {
    console.log(char.toUpperCase());
}


//for of loop with objects
const moviesReviews = {
    Arrival: 9.5,
    Alien: 9,
    'Lord of the rings': 10,
    'This is the end': 9,
    'Avater': 10

};

