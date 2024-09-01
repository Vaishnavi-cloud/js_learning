let val = 100;
let c = 0;
let val1 = 0;
if (val >= 50) {
  console.log("in");

  c = 50 * 0.75;
  if (val > 50 && val <= 150) {
    val1 = val - 50;
    c = c + val1 * 1;
    if (val > 150 && val <= 250) {
      val1 = val - 150;
      c = c + val * 1.3;
      if (val > 250) {
        val1 = val - 250;
        c = c + val * 1.5;
      }
    }
  }
  //   console.log(c);
} else {
  console.log("value is zero or less than 0");
}
console.log(c);
