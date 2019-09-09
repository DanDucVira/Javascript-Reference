//template Strings

let name = "Jimmy";
let lastName = "Nutron";
let age = 25;

//concatentaion way
let result = ' The users name is ' + name + ' and his last name is ' + lastName + ' and is age is ' + age + ' years old';
console.log(result);

//template string way
let templateString = `the users name is ${name} and his last name is ${lastName}. the users age is ${age} years old`;
console.log(templateString);

//creating html templates
let html = `
    <h2>${name}</h2>
    <p>${lastName}</p>
    <p>age is ${age}</p>
`;
console.log(html)