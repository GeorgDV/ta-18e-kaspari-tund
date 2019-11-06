#!/usr/bin/env node
//ANSI ESCAPE CODES
console.clear();
for (let i = 30; i <= 36; i++ ) {
    console.log("\u001b[" + i + "mHello");
}
console.log("\u001b[31mHello\u001b[7m");
console.log("Hello again\u001b[0m");

/*
console.log("Hello!");
setTimeout(() => {
    console.log("\u001b[1AWorld!!! - This just overwrote the last line.."); 
}, 1500);
*/

setInterval(() => {
    let time = new Date().toISOString().substr(11, 12);
    console.log("\u001b[1A" + time);
}, 0);

