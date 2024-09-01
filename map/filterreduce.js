let con = [33, 44, 55, 80, 90, 200];
let ff = con.filter((v) => v > 80);
console.log(ff);
//reducer
let red = con.reduce((total, v) => total + v, 1000);
let red1 = con.reduce((total, v) => total + v);
console.log(red);

let oo = {
  a1: "w",
  s: "r",
};
oo.h = "e"; //1-way of aadding
oo["j"] = "hhh"; //2-way of aadding

//accessing
console.log(oo.a1);
console.log(oo["s"]); //if u use sqr bracket ensure to put the jey value inside the ""
console.log(oo);
//this is 2d arreay it has more arrays

let gg = [];
if (gg[0]) {
  //gg array has 0th index value then provide as true and ente to the statent else go with else part
  console.log("ghjghghgfhjghj");
} else {
  console.log("sorry");
}
let arr = [
  ["a", "b", "c"],
  ["d", "b", "c"],
  ["g", "h", "i"],
];

//more over we are converting the arrtory to 0me d array and then obj
//falt is used to amske then as one d array
// arr.flat().reduce--chaining of function
let dis = arr.flat().reduce((acc, val) => {
  if (acc[val]) {
    acc[val] = acc[val] + 1;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {});

console.log(dis);
