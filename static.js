class User {
  static count = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.count++;
  }

  printName() {
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }

  static printCount() {
    console.log("let see the count", User.count);
  }
}

let obj1 = new User("vaishu", 22);
let obj2 = new User("anu", 21);
let obj3 = new User("guna", 20);
console.log(User.count);
User.printCount();
console.log(obj1);
