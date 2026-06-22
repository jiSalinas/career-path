/*
Hotel rooms:

101
102
103
104
105

Rooms under maintenance:

103

Expected output:

Room 101 Available
Room 102 Available
Room 104 Available
Room 105 Available
*/

for(let roomNumber = 101; roomNumber <= 105; roomNumber++) {
    if (roomNumber === 103) {
        continue; // Skip room 103 as it's under maintenance
    }
    console.log(`Room ${roomNumber} Available`);
}

