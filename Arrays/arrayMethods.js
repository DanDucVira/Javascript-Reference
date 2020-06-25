/* Array Methods


*Push - add to end
*Pop - remove from end
*Shift - removes from start
*Unshift - add to start

*concat -merge arrays
*includes - look for a value
*indexOf - just like str.indexOf
*join - creates a string from arr
*reverse - reverses an array!
*slice  - copy portion of an arr
*splice - removes/replace elements
*sort - sorts an array

*/

let nums = [1, 2, 3, 4, 5];

nums.push(6);
console.log(nums);

nums.pop();
console.log(nums);


nums.shift();
console.log(nums);

nums.unshift(10);
console.log(nums);



//the concat() method is used to merge two or more arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2));


// the reverse() method reverses an array in place
let letters = ["a", "b", "c", "d", "e", "f"];
console.log(letters.reverse());



//the slice() method returns a shallow copy of a portion of an array into a new array
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 3);
console.log(swimmers);


//splice method changes the contents of an array by removing or replacing existing elements and/or adding newe elments in place
animals.splice(1, 0, "octopus");


//the sort() methods sorts the elements of an array in place and returns the sorted array.
let people = ["Mrs.Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
people.sort();