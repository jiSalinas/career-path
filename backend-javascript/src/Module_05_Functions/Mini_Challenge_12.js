/*
Create:

function calculateFinalPrice(roomPrice) {
    // assume tax = 15%
}

Requirements:

Calculate:
finalPrice = roomPrice + (roomPrice * 0.15)
Return the final price.
Store the result:
const total = calculateFinalPrice(100);
Print:
Final room price: 115
*/

// Write your code here:
function calculateFinalPrice(roomPrice) {
    const tax = 0.15;
    const finalPrice = roomPrice + (roomPrice * tax);
    return finalPrice;
}

const total = calculateFinalPrice(100);
console.log(`Final room price: ${total}`);