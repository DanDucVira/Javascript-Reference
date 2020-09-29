/*
HTTP Requests


*Make HTTP requests to get data from another server
-We make these requests to API endpoints

*/


const request = new XMLHttpRequest();


request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);

    //Look up status codes
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log("Could not fetch the data");
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();


