//NOT (!)
///!expression return true if the expression is false
!null //true
    !(0 === 0) //false
    !(3 <= 4) //false

if (!loggedInUser) {
    console.log("GET OUT OF HERE!");
}

let flavor = "grape";
if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log("Sorry we dont have this flavor");

}
if (!(flavor === 'grape' && flavor === 'cherry')) {
    console.log("Sorry we dont have this flavor");

}


//Operator Precedence
//Not(!) has higher precedence than && and || && has higher precedence than ||