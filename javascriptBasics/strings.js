//Strings
//you can use single or double quotes, just make sure you are consistent.
let string = "This is a string";

//strings are indexed -- Each character has a corresponding index(a positional number)
"Chicken" //c = 0, h = 1 , i = 2, c = 3, k = 4, e = 5, n = 6


"chicken".length //give the number of caracters in the word = 7


//String Methods
/*
Strings come with a set of built-in methids, whitch are actions that can be performed on or with that particular string.

We can do things like:
-Searching within a string
-Replacing parts of a string
-changing case(upper/lowercase)

example:
thing.method()
*/

let msg = "Hello Everyone";
msg.toUpperCase(); // all letters are uppercase
msg.toLowerCase() // all letters are lowercase

let color = "  green";

color.trim() //removes spaces
color.trim().toUpperCase()


//more String Methods
/*
example: thing.method(arg)
some methods accept -arguments- that modify their behavior.
we pass these arguments inside of the parentheses.
*/


//indexOf

let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)



//slice

let str = 'skyrim';

str.slice(0, 3) //sky
str.slice(5) //skyrim

//replace

let annoyingLaugh = "teehee so funny! teehee!";
annoyingLaugh.replace('teehee', 'haha'); //haha so funny! teehee!
//Notice that it only replaces the first instance


//string Escapes
/*
- \n - newline
- \' - single quote
- \" - double quotes
- \\ - backslash 
*/