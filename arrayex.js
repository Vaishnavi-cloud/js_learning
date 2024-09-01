let arr = [5, 8, 10, 7, 9, 11];
arr.splice(3, 3, 17, 19, 111);
console.log(arr);
//[ 5, 8, 10, 17, 19, 111 ]
//Insert 100 in the beginnning
arr.unshift(100);
console.log(arr);
//delete  and insert before one last position
arr.splice(5, 1, 200);
console.log(arr);
arr.push(1000);
console.log(arr);
let c = arr.length;
console.log("length is " + c);
let mid = c / 2;
arr.splice(mid, 0, 0);
console.log(arr);
