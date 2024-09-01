//recursion:

function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1);
}
console.log(factorial(5));
//function expression:
// for this to run it demand the function decklaration to be givrn initially
let a = 101;
let numfun = function (num) {
  return num % 2 == 0;
};
console.log(numfun(a));
// let numfun = function (num) {
//   return num % 2 == 0;
// };
//arregate sum using array

let arr = [2, 3, 5, 6, 10];
let sum = 0;
let findSum = function (arr) {
  for (let val of arr) {
    sum += val;
  }
  return sum;
};

console.log(findSum(arr));

//vol of cylinder

let vol = function (l, b, h) {
  return l * b * h;
};
console.log("func expression", vol(2, 3, 4));
//using arrow function

let vol1 = (l, b, h) => {
  return l * b * h;
};
console.log("arrow function", vol1(2, 3, 4));
//trying this in arrow function

let arr1 = [2, 3, 5, 6, 10];
let sum1 = 0;
let findSum1 = (arr) => {
  for (let val of arr) {
    sum1 += val;
  }
  return sum;
};

console.log(findSum1(arr));
//area of circle

let areacircle = (r) => 3.14 * r * r;
console.log(areacircle(3).toFixed(2));
//area of circle
let area = (r) => Math.PI * r * r;
console.log(area(5));

//variable arguments - rest parameters
let prod = function (...args) {
  let result = 1;
  for (let val of args) result *= val;
  return result;
};

let prod2 = function () {
  let result = 1;
  for (i = 0; i < arguments.length; i++) result *= arguments[i];
  return result;
};
console.log(prod2(7, 6, 5, 4));

function vaish() {
  //

  return "hiiiii";
}
let hh = vaish();
console.log("see");
console.log(hh);
