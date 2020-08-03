//For..OF
for (variable of iterable) {

}




let subreddits = ["soccer", "popheads", "cringe", "books"];

for (let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}


//for..of


for (let sub of subreddits) {
    console.log(sub);
}



for (let chr of "cockadoodledoo") {
    console.log(chr.toUpperCase());
}





//for.. of with objects
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    "Kill Bill": 8.5
};


//does not work
// for (let x of movieReviews) {
//     console.log(x)
// }

for (let movie of Object.keys(movieReviews)) {
    console.log(movie);
}
//Arrival, Alien, Amelie, in Bruges , kill bill

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}
//9.5, 9,8,9,8.5