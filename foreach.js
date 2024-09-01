let arr = ["mango", "pine", "apple"];
let ss;
arr.forEach(dis);
function dis(val) {
  // console.log(val.toUpperCase());
  ss = val.toUpperCase();
  return ss;
}
console.log("maop", ss);
//in arrow function

arr.forEach((val) => console.log(val.toUpperCase()));
console.log("hkhkghghg", arr); //[ 'mango', 'pine', 'apple' ]

arr.forEach((val, index, arr) => {
  arr[index] = val.toUpperCase();
});

console.log("iarrr", arr); //[ 'MANGO', 'PINE', 'APPLE' ]

// arr = ["ECE", "IT", "CSC", "EEE"];

// arr.forEach((val) => {
//   const opt = document.createElement("option");
//   opt.textContent = val;
//   opt.value = val;
//   document.getElementById("branch").appendChild(opt);
// });

//other eample

let arr1 = ["vaish", "guna", "sheeba"];
// arr1.forEach(print);
// console.log(print);
// function print(val) {
//   console.log(val);
// }
//in callback using arrow function
// arr1.forEach((val) => console.log(val.toUpperCase())); //VAISH
// GUNA
// SHEEBA
console.log("arr1", arr1);
//[ 'vaish', 'guna', 'sheeba' ]
//which means it is not properly stored back to the array
arr1.forEach((val, i, r1) => {
  console.log(r1);
  console.log((r1[i] = val.toUpperCase()));
});
let rrr = arr1;
console.log("arrcheck", rrr);
