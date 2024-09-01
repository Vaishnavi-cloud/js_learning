const btn = document.querySelector("button");
let resdiv = document.createElement("div");
resdiv.id = "result";
//event listener
document.getElementById("wrapper").appendChild(resdiv);
console.log("ghjhghjgh");
btn.addEventListener("click", display);
function display() {
  const input = document.getElementById("input");
  console.log(input);
  const city = input.options[input.selectedIndex].value;
  console.log(input.options[input.selectedIndex]);

  console.log(city);
  let population = 0,
    literacyRate = 0,
    language = "";
  switch (city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada";
      break;
    case "Chennai":
      population = 8443675;
      literacyRate = 88.71;
      language = "chenai";
      break;
    case "Delhi":
      population = 8443675;
      literacyRate = 88.71;
      language = "hindi";
      break;
    case "Mumbai":
      population = 8443675;
      literacyRate = 88.71;
      language = "marathi";
      break;
  }
  let text = `${population} ${literacyRate} ${language} is spoken`;
  console.log(text);
  resdiv.innerHTML = text;
}
