//map is a collection of kay and values
//key or value can be object.
//key ust be unique ,value even it is same it is allowed

let map1 = new Map();
map1.set("vaishu", 1);
map1.set("anu", 2);
map1.set("guna", 3);

map1.set("guna", 4);
console.log(map1);
console.log(map1.size);
console.log(map1.get("guna"));
console.log(map1.has("guna"));
console.log(map1.delete("guna"));
console.log(map1);
map1.set({ name: "vaishu", age: 22 }, 1);
console.log(map1);
let obj1 = { name: "vaishu", age: 22 };
map1.set(obj1, 1); //obj1 is reference type from different address.
console.log(map1);

//looping through map

// arr = Array.from(map1);
// console.log(arr);
//looping in map when it ha skey,values
console.log("************");
for (let i of map1) {
  console.log(i);
}

console.log("************");

for (let [k, v] of map1) {
  console.log(k);
}

console.log("************");
for (let i of map1.keys()) {
  console.log(i);
}
console.log("************");
//for each
//first value and next ket
map1.forEach((v, k) => console.log("key is " + k + " value is " + v));

// ------------------------------------------------------------------------------------------------------------------------------

let aa = [5, 7, 8, 8];
let s = new Set(aa);
console.log(s);

let a2 = [
  ["vaishu", 1],
  ["anu", 2],
  ["guna", 3],
];
//2d array

let m = new Map(a2);
console.log(m); //key and value
console.log(...m); ///spread operator makes it as array
