class mom {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  work() {
    console.log("she is working", this.name);
  }
}

class daughter extends mom {
  constructor(name) {
    // this.name = name;//doesn't allow this in child class without super
    super(name, 22);
  }
  hobby() {
    console.log("she is dancing ");
  }
  work() {
    console.log("she is working    ghghjghkgkhghkghk", this.name);
    return this;
  }
}

let obj1 = new daughter("jbbkbk");
obj1.work();
obj1.hobby();
console.log(obj1);

console.log("-------------------------------------------------");
//method chaining
obj1.work().hobby();
