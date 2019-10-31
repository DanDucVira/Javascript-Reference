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
    },
    logBlogs: function () {
        // console.log(this.blogs);
        console.log("this user has written following blogs:");
        //this 'keyword
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
console.log(user.name);
console.log(user["name"]);


//addeing methods
user.login();
user.logout();


//math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 10));