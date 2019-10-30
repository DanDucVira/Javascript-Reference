//object literals



//creating object literals
let user = {
    name: "Daniel",
    age: 29,
    email: "daniel@gmail.com",
    location: "Canada",
    blogs: ["why tacos rule", "10 things to make with hot sauce"],
    login: function () {
        console.log("the user logged in");
    },
    logout: function () {
        console.log("user logged out");
    }
};

console.log(user);
console.log(user.name);
console.log(user["name"]);


//addeing methods
user.login();
user.logout();