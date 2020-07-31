//Strings come with a set of built-in methods, whitch are actions that can be performed on or with that particular string
/*
we can do things like
    - Searching within a string
    - Replacing parts of the string
    - Changing case (upper / lowercase)
*/

let msg = "string";

console.log(msg);

//makes all text uppercase
msg.toUpperCase()

console.log(msg);

//makes all text lowercase
msg.toLowerCase();

console.log(msg);




let greeting = "   leve me alone plz  ";

//takes white space away
greeting.trim() //"Leave me alone plz"

/*
Some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses.
*/

//|IndexOF
let tvShow = "naruto";

tvShow.indexOf("naru"); // 0
tvShow.indexOf("to"); // 4
tvShow.indexOf("z"); //-1 (Not found)



//slice
let str = "Daniel";

str.slice(0, 3); //Dan



//replace
//replaces a value

let strRep = "Boom Boom la la";

strRep.replace("Boom", "Da");