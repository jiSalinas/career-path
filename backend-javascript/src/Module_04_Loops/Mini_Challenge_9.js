/*
Requirements:

customersWaiting = 5

Serve one customer at a time.

After serving each customer,
show how many customers remain.

When the queue reaches zero,
print:

"Hotel queue is empty."
*/

// Write your code here:
let customersWaiting = 5;

while (customersWaiting > 0) {
    console.log(`Serving customer`);
    customersWaiting--;
    console.log(`${customersWaiting} customers remaining`);
    
}

console.log("Hotel queue is empty.");