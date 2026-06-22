/*

Requirements:

let bookedRooms = [
    101,
    104,
    107
];

Create a function:

bookRoom(requestedRoom)

Business rules:

If the room is already booked:
Room X is already booked.
Otherwise:
Add the room to the array.
Print:
Room X has been booked successfully.

*/

let bookedRooms = [
    101,
    104,
    107
];

function bookRoom(requestedRoom) {
    
    if (bookedRooms.includes(requestedRoom)){
        console.log(`Room ${requestedRoom} is already booked`);
        return;
    }

    bookedRooms.push(requestedRoom);
    console.log(`Room ${requestedRoom} has been booked successfully`);
    
}

bookRoom(102);
bookRoom(102);
bookRoom(104);
bookRoom(103);

console.log(bookedRooms);