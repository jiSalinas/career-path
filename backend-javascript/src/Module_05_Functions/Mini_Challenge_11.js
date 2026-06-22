/*
Requirements:

Create:

function printGreeting(guestName) {
    ...
}

Output:

==================
Welcome Jose!
Enjoy your stay!
==================

Then call:

printGreeting("Jose");
printGreeting("Maria");
printGreeting("John");
*/

// Write your code here:
function printGreeting(guestName) {
    console.log("==================");
    console.log(`Welcome ${guestName}!`);
    console.log("Enjoy your stay!");
    console.log("==================");
}

printGreeting("Jose");
printGreeting("Maria");
printGreeting("John");