/*

Requirements:

let bookedRooms = [101, 104, 107];

Create:

bookRooms(requestedRooms)

Example:

bookRooms([102, 104, 105]);

Expected output:

Room 102 has been booked successfully.
Room 104 is already booked.
Room 105 has been booked successfully.

Final array:

[101, 104, 107, 102, 105]

*/

let bookedRooms = [101, 104, 107];

function bookRooms(requestedRooms) {
    
    for (let requestedRoom of requestedRooms) {
        if (bookedRooms.includes(requestedRoom)){
            console.log(`Room ${requestedRoom} is already booked`);
            continue;
        }
    
        bookedRooms.push(requestedRoom);
        console.log(`Room ${requestedRoom} has been booked successfully`);
    }
    
}

bookRooms([102, 104, 105]);

console.log(bookedRooms);