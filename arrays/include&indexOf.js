let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'

];
ingredients.includes('fish'); //false
ingredients.includes('shrimp'); //true

ingredients.includes('water', 0) //false

if (ingredients.includes("flour")) {
    console.log("I am gluten free, i cannot eat that!");
}

ingredients.indexOf('eel'); //6
ingredients.indexOf("maple syrup");//-1 not there