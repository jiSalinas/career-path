/*
Given:

let bookedRooms = [
    101,
    104,
    107
];

Business rule:

A guest wants room:

let requestedRoom = 104;

Print:

Room 104 is already booked.

Otherwise:

Room X is available.
*/

// Write your code here:

let bookedRooms = [
    101,
    104,
    107
];

let requestedRoom = 104;

if (bookedRooms.includes(requestedRoom)) {
    console.log(
        `Room ${requestedRoom} is already booked.`
    );
}
else {
    console.log(
        `Room ${requestedRoom} is available.`
    );
}