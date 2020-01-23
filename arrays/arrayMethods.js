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