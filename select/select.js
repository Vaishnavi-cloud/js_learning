let arr = ["ece", "eee", "it", "cse"];
arr.forEach((v) => {
  let opt = document.createElement("option");
  opt.textContent = v.toUpperCase();
  opt.value = v;
  console.log(v);
  document.getElementById("branch").appendChild(opt);
});
