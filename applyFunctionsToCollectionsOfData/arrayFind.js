/*
FIND
--Return the value of the first element in the array that satisfies the provided testing function
*/

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs Smith",
    "Mrs. Doutfire",
    "Mr. Deeds"
]

const movie = movies.find(movie => {
    return movie.includes("Mrs");
})

const movie2 = movies.find(m => {
    m.indexOf("Mrs") === 0
})

