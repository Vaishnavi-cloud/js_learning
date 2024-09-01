//primitive data types-- string,boolean,Number,undefined,null,symbol,bignit
//non primitive data types-- object,array,function(what we define)

let a = 100;
let b = a;
b = 200;
console.log("a is", a);
console.log("b is", b);

//obj
let obj1 = {
  name: "Vaishu",
  age: 22,
};
let obj2 = obj1;
obj1.age = 24;
console.log(obj1);
console.log(obj2);

let a1 = [1, 2, 3, 4, 5];
let b1 = a1;
a1[0] = 100;
console.log(a1);
console.log(b1);
