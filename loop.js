//for loop
let i;
for (i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("deceremet ");
for (i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("while incre ");
//while
i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("while decre ");
i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}

console.log("do while");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("do while next");
//one time execution is compulsory here
i = 11;
do {
  console.log(i);
  i++;
} while (i < 10);
console.log(i);
