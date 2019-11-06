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

// changParas.forEach(changPara => {
//     console.log(changPara.innerText);
//     changPara.innerText += ' new text';
// });


const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML = '<h2>This is a another headline</h2>';
// console.log(content);
const people = ['Daniel', 'Dragonborn', 'skyrim'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});


//Getting & setting Attributes
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'htpps://www.thenetninja.co.uk');

link.innerHTML = 'The Net Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green;');

//Changing Css styles
const headTitle = document.querySelector('h2');

console.log(headTitle.style);
console.log(headTitle.style.color);
headTitle.style.color = 'green';

//adding and removing classes


