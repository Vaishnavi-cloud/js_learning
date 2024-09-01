let user = {
  name: "Vaishnavi",
  intial: "G",
  number: "9150773515",
  salary: 25000,
  address: {
    street: "raja street",
    venue: "ramana nagar",
    place: "Chennai",
  },
  members: ["mom", "dad", "brother", 3],

  work: function () {
    console.log("as an intern");
  },

  progress() {
    console.log("still on going");
  },
};
console.log(user);
user.work();
user.progress();
//update

user.salary = 30000;
console.log(user);
console.log(user.salary);

user.offer = "possible";

console.log(user);

let degree = "qualification";
user[degree] = "mtech";
console.log(user);
user.degree = "dddd";
console.log(user); //doesn't support when using the [] way of assignmenet
