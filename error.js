//Exception Handling

try {
  let a = 100;
  let b = a / 0;
  console.log(b);
} catch (e) {
  console.log(e);
} finally {
  console.log("thanks");
}
