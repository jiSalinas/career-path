/*
A hotel room can be booked only if:

Room is available
AND
Guest has paid

--------------------------------

A guest receives a discount if:

Guest is a gold member
OR
Guest has a voucher
-------------------------------
*/

// Requirements:

const isAvailable = true;
const hasPaid = true;
const isGoldMember = false;
const hasVoucher = true;

/*
Calculate:

- canBookRoom
- getsDiscount

*/

const canBookRoom = isAvailable && hasPaid;
const getsDiscount = isGoldMember || hasVoucher;

console.log(`Can Book Room: ${canBookRoom}`);
console.log(`Gets Discount: ${getsDiscount}`);