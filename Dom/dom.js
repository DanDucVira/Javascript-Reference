//The Query Selector

const para = document.querySelector('p');
console.log(para);

const error = document.querySelector('.error');

console.log(error);



const all = document.querySelectorAll('p');
console.log(all);

all.forEach(all => {
    console.log(all);
});

//get an element by ID
const title = document.getElementById('page-title');
console.log(title)

//get elements by their class name
const error2 = document.getElementsByClassName('error');
console.log(error2);
//get elements by their tag name
const pageTitle = document.getElementsByTagName('h1');
console.log(pageTitle);



//adding & changing page content

const changPara = document.querySelector('p');
// console.log(changPara.innerText);
// changPara.innerText = "GoodBye World";
// console.log(changPara);

const changParas = document.querySelectorAll('p');

changParas.forEach(changPara => {
    console.log(changPara.innerText);
});