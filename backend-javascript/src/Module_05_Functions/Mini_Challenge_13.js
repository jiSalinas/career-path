/*
Requirements:

Create:

function canBookRoom(roomAvailable) {
    // your code
}

Business rules:

If roomAvailable is false
Return:
Booking denied
Otherwise return:
Booking confirmed

Then:

console.log(canBookRoom(true));
console.log(canBookRoom(false));
*/

// Write your code here:
function canBookRoom(roomAvailable) {
    if (!roomAvailable) {
        return "Booking denied";
    }
    return "Booking confirmed";
}

console.log(canBookRoom(true));
console.log(canBookRoom(false));