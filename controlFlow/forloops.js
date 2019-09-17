//for loops

for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}
console.log('loop finished');

const userName = ['Daniel', 'Sarah', 'Mary', 'Tommy'];


for (let i = 0; i < userName.length; i++) {
    console.log(userName[i]);

    //html template
    let html = `<div>${userName[i]}</div>`;
    console.log(html);

}
console.log('Loop Finished');