/*
Given:

let roomsUnderMaintenance = [
    103,
    105,
    108
];


Print:

Room 103 is under maintenance.
Room 105 is under maintenance.
Room 108 is under maintenance.
*/

// Write your code here:
let roomsUnderMaintenance = [
    103,
    105,
    108
];

for (let i = 0; i < roomsUnderMaintenance.length; i++) {
    console.log(
        `Room ${roomsUnderMaintenance[i]} is under maintenance.`
    );
}
