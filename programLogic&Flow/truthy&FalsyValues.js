// All values have an inherent truthy or falsy boolean value
/*
Falsy values:
-false
-0
-""(empty string)
-null
-undefined
-NaN

----Everything else is truthy!----


*/
let mystery = 5;
if (mystery) {
    console.log('TRUTHY');
} else {
    console.log("FALSY");
}

let loogedInUser = "thomas123";

if (loggedInUser) {
    console.log("YOU ARE LOGGED IN!");
} else {
    console.log("PLEASE LOG IN");
}