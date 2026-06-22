/*
Given:

let rooms = [
    101,
    102,
    103,
    104,
    105
];

let roomsUnderMaintenance = [
    103
];

Business rule:

Print only the rooms that are available:

Room 101 is available.
Room 102 is available.
Room 104 is available.
Room 105 is available.
*/

// Write your code here:
let rooms = [
    101,
    102,
    103,
    104,
    105
];

let roomsUnderMaintenance = [
    103
];

for (let i = 0; i < rooms.length; i++) {
    if (!roomsUnderMaintenance.includes(rooms[i])) {
        console.log(`Room ${rooms[i]} is available.`);
    }
}