/*

Start with:

let bookedRooms = [
    101,
    104,
    107
];

let requestedRoom = 102;

Business rule:

If room 102 is not already booked,
book it.

Expected final array:

[
    101,
    104,
    107,
    102
]

*/

let bookedRooms = [
    101,
    104,
    107
];

let requestedRoom = 102;

if (!bookedRooms.includes(requestedRoom)) {
    bookedRooms.push(requestedRoom);
}
else {
    console.log(
        `Room ${requestedRoom} is already booked.`
    );
}