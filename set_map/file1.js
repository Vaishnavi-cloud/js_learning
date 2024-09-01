let arr = [1, 2, 3, 1];
let mm = new Set(arr);
console.log(arr);
console.log(mm);
//add in set
mm.add(10);
mm.add(20);
mm.add("fish");
mm.add("fish");
console.log(mm);
//we can include object to set
mm.add({ name: "vaishu", age: 22 });
console.log(mm);
//delete from set
mm.delete(20);
console.log(mm);
//clear all set
// mm.clear();

// console.log(mm);
console.log(mm.size);
console.log(mm.has(10));
console.log(mm.delete(10));
console.log(mm);
// console.log(Array.from(mm));
let obj1 = { name: "vaishu", age: 22 };
mm.add(obj1);
console.log(mm.size);
console.log(mm);
