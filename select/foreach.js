let input = [6, -5, 6, -2, 6, 6, -1];
console.log("sum of pos number s only");
let sum = 0;
input.forEach((val) => {
  if (val > 0) {
    sum += val;
  }
});
console.log(sum);
