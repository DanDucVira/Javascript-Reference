//Arrays

const listUsers = ["user1", "user2", "user3", "user4"];
console.log(listUsers[0]);

//removes the last element from an array and returns it
listUsers.pop();

//Appends new elements to an array and returns the new length of the array. Adds the new element to the end of the array
listUsers.push("NEW");

//Removes the first element form an array and returns it.
listUsers.shift();

//Inserts new elements at the start of an array.
listUsers.unshift();

//Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
console.log(listUsers.length);

