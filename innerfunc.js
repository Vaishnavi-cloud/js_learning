let a = 100;

function add() {
  console.log(a);
}
add(); //100
a = 1000;
add(); //1000
function odd() {
  let b = 10000;
  function inner() {
    console.log("inner functioon", b, a);
    //note b--can able to access its local and global of a that is why it is called as lexical scoping
  }
  //   inner();
  //instead of aclling the inner() function we can return that using return keyword
  return inner; // enssure that we need to get it using a variable outside
}
let s = odd();
s();

//lets try passing an parameter to it

function odd1(name) {
  let b = 10000;
  function inner() {
    console.log("inner functioon", b, a);
    //note b--can able to access its local and global of a that is why it is called as lexical scoping
    console.log("hello", name);
  }
  //   inner();
  //instead of aclling the inner() function we can return that using return keyword
  return inner; // enssure that we need to get it using a variable outside
}
let s1 = odd1("vidya");
s1();

//closure

function add(x) {
  return function sub(y) {
    return x * y;
  };
}
let d = add(5);
console.log(d(6)); //it mul with 5 only
console.log(d(10)); //it mul with 5 only
console.log(d(100)); //it mul with 5 only
//the thing is how many times we call d it still remembers the outer arg 5 and mul only to it----t is called closure

//example of inner function
function add1(x) {
  function sub1(y) {
    return x * y;
  }
  return sub1;
}
let m = add1(10);
console.log(m(6));
