//Collections and Nodelists
const collectionItems = document.getElementsByClassName("items");

const nodeItems = document.querySelector("#todo-list");


console.log(nodeItems.childNodes);





const collectionItems = document.getElementsByClassName("item");
console.log(collectionItems);

//create new elements
const newItem = document.createElement("li");
//add class to element
newItem.classList.add("item");
//add text to element
newItem.innerTExt = "item 3";

