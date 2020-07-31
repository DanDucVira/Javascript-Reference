/*NESTING --> we can nest conditionals inside conditionals */

let password = "Meow123";
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("password cannot include spaces");
    } else {
        console.log("Valid password!!");
    }
} else {
    console.log("Password too short!");
}