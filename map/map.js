//advantage of using the map is a new array is been creted

let inr = [55, 77, 90];
let us = inr.map((v) => {
  return v * 100;
  //   console.log(v * 100);
});
console.log(us);
//providing inside the function:

let us1 = inr.map(display);
function display(val) {
  //   console.log(val * 4);
  return val * 4;
}
console.log("function", us1);

let obj = [
  //array of objects
  {
    name: "kavi",
    age: 33,
  },
  {
    name: "ramya",
    age: 37,
  },
  {
    name: "deepa",
    age: 32,
  },
  {
    name: "lavanya",
    age: 24,
  },
  {
    name: "kajayai",
    age: 38,
  },
];
console.log(obj);
let get = obj.map((x) => x.name);
console.log(get);
