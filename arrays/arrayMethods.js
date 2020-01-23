//Array Methods
/*
- Push -> add to end
- Pop -> remove from end
- Shift -> remove from start
- Unshift -> add to start

*/
let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'

];

topSongs.push('Fortunate Son'); //adds an item at the end of an array
topSongs.pop(); //removes the last item of the array

let dishesToDo = ['big platter'];
dishesToDo.unshift('large platter'); //adds to the start of the array
dishesToDo.unshift('small plate');
dishesToDo.unshift('coffee cup');

dishesToDo.shift(); //removes the first value of an array

/*
More Methods
- concat -> merge arrays
- includes -> look for a value
- indexOf -> just like str.indexOF
- join -> creates a string from arr
- reverse - reverses an array
- slice -> copy portion of an arr
- splice -> remove/replace elements
- sort -> sorts an array

*/


//- concat -> merge arrays
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
console.log(fruits.concat(veggies));