//Objects

/*
 ---Objects ara collections of properties.
 ---Properties are a key value pair.
 ---Rather than accessing data using an index, we use custom keys.


*/

//example of an object
let person = {
    name: "daniel",
    age: 29,
    country: "canada",
    favoriteGame: "skyrim"
};

//accessing object Properties
const numbers = {
    '100': 'one hundred',
    '16': 'sixteen',
};

console.log(numbers[100]);

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'

};
console.log(palette['red']);


//addng and updating properties
const userReviews = {


};
userReviews['DanDucVira'] = 4.0;
userReviews.mrSmith90 = 2.4;
console.log(userReviews);


//Nested Arrays & objects
const students = {
    firstName: "dany",
    lastName: "beaudeat",
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }

};
const avg = (students.exams.midterm + students.exams.final) / 2;
console.log(avg);



const shoppingCart = [{
        product: "milk",
        price: 3.45,
        quantiy: 1
    },
    {
        product: "soda",
        price: 1.45,
        quantiy: 2
    },
    {
        product: "apple",
        price: 0.45,
        quantiy: 12
    }
];