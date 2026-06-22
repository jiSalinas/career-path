// Input variables
const hotelName = "Grand Hotel";
let roomPrice = 150;
const taxRate = 0.15;

/*
Calculate the tax amount.
Calculate the final room price.
Create a variable:
*/
// Derived variables
const taxAmount = roomPrice * taxRate;
const finalRoomPrice = roomPrice + taxAmount;
// Business Rule Variable
const isLuxuryRoom = roomPrice > 100;

console.log(`Hotel Name: ${hotelName}`);
console.log(`Room Price: $${roomPrice}`);
console.log(`Tax Amount: $${taxAmount.toFixed(2)}`);
console.log(`Final Room Price: $${finalRoomPrice.toFixed(2)}`);
console.log(`Is Luxury Room: ${isLuxuryRoom}`);