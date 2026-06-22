function calculateFinalPrice(roomPrice) {
    const tax = roomPrice * 0.15;
    return roomPrice + tax;
}

const standardRoom = calculateFinalPrice(100);
const luxuryRoom = calculateFinalPrice(300);

console.log(`Standard Room: ${standardRoom}`);
console.log(`Luxury Room: ${luxuryRoom}`);