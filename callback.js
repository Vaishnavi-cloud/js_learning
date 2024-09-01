function bb() {
  console.log("hi buddy");
}

function keep(call) {
  call();
}
keep(bb);

//call back with arg passed

function newYear(num) {
  console.log("happy year", num);
}

function dis(call) {
  console.log(call);
  call(2024);
}
dis(newYear);

// function newYear1(num) {
//   console.log("happy year", num);
// }

let dis1 = (num) => {
  console.log("happy year", num);
};
dis1(8888);

// greet(greetConsole);
// // greet(greetHeading)
function greetConsole(name) {
  console.log(name, "helllo");
}
function greet(callback) {
  console.log(callback);
  callback("Ram");
}

greet((name) => {
  console.log(name, "helllo");
});

//actuall call back
function add() {
  console.log("addd 2 num");
}
//one way of writing
addcall(add);
function addcall(callback) {
  console.log(callback);
  callback();
}
//other way of writing
// () => console.log("addd 2 num")  this is the arrow function  which is passed as the para inside other function the other function is been sent inside as the arrow function

addcall(() => console.log("addd 2 num"));

//we can directly addd the call back function inside as well
// function sub() {
//   console.log("sub 2 num");
// }
