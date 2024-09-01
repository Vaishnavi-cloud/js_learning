let arr = [1, 2, 3, 4, 5];

//for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("**************");
//for ..of
for (let val of arr) {
  console.log(val);
}
console.log("**************");
//map
arr.map((e) => console.log(e));

console.log("**************");
//foreach

arr.forEach((e) => console.log(e));
console.log("**************");

//for ..in

let obj = {
  name: "vaishu",
  age: 22,
};
console.log(obj);
for (let i in obj) {
  console.log(i); //keys alone
  console.log(obj[i]); //values
}
