let userNames = ['Daniel', 'Sarah', 'john', 'timmy'];
console.log(userNames);
console.log(userNames[0]);


let ages = [29, 25, 18, 32, ];
console.log(ages[2]);

let random = ['Daniel', 'crystal', 245, 78];
console.log(random);

console.log(userNames.length);

//array methods

let result = userNames.join('---');
console.log(result);
let result2 = userNames.indexOf('Daniel');
console.log(result2);

//to join two arrays togther use concat()
let result3 = userNames.concat(['ken', 'cyn']);
console.log(result3);

let result4 = userNames.push('josh');
console.log(result4);

let result5 = userNames.pop();