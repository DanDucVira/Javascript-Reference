// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality
// != not equal
// === struct equality
// !== strict non-equality


//some examples
//Notice these all return a boolean!
/*
Through it's uncommon, you can compare strings. just be carful, things get dicey when dealing with case, special characters, and accents!

*/
10 > 1; ///true
0.2 > 0.3; //false
-
10 < 0; //true
50.5 < 5; //false
0.5 <= 0.5; //true
99 >= 4; //true
99 >= 99 //true
'a' < 'b'; //true
'A' > 'a'; //false

// == (Double equals)
/*
-Checks for equality of value, but not equality of type.
-It coerces both values to the same type and then compares them.
-This can lead to some unexpected results!
*/
5 == 5; //true
'b' == 'C'; //false
7 == '7'; //true
0 == ''; //true
true == false; //false
0 == false; //true
null == undefined; //true

// ===(triple equals)
//checks for equality of value AND type

5 === 5; //true
1 === 2; //false
2 === '2'; //false
false === 0; //false

//same applies for != and  !==
10 != '10'; //false
10 !== '10'; //true