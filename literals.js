const firstName = "Vaishnavi";
const lastName = "Ganesan";
const city = "Chennai";
console.log(firstName + " " + lastName + " lives in " + city);
//using template literals

let m = `${firstName} ${lastName} lives in ${city}`; //this way of writing is easier
console.log(m);
// let j="rgrgrg
// feffrferfre"
let m1 = `b,jfhrjkfhr,g
gjgjhgjhrjgkhjkr
hjkrkgjkljklklkljl;kg
jgjrgljlrehkhkhhk`;

// let m2='cat's name is totoo';
// let m2="cat's name is totoo";

let m2 = `cat's name is "gggg"`;
//problems:

const item = 5;
const bill = 95;
console.log(`You have ${item} items in your cart.`);
console.log(`Your bill amount is $${bill}.`);
