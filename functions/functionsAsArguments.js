function callThreeTimes(f) {
    f()
    f()
    f()
}

function cry() {
    console.log("BOO HOO I'M SO Sad!");

}

function rage() {
    console.log("I HATE EVERTHING");
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}
repeatNTimes(rage, 13)