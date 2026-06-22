/*
Scenario:

A guest can check in only if:

Has paid
AND
Has valid ID

Then classify the room:

Price >= 300  → Presidential Suite

Price >= 200  → Luxury Room

Price >= 100  → Standard Room

Otherwise     → Budget Room
*/

// Input variables
const hasPaid = true;
const hasValidID = true;
const roomPrice = 250;

if (hasPaid && hasValidID) {
    console.log("Check-in Approved");
    if (roomPrice >= 300) {
        console.log("Room Type: Presidential Suite");
    } else if (roomPrice >= 200) {
        console.log("Room Type: Luxury Room");
    } else if (roomPrice >= 100) {
        console.log("Room Type: Standard Room");
    } else {
        console.log("Room Type: Budget Room");
    }
}
else {
    console.log("Check-in Denied");
}

