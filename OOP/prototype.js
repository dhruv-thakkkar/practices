const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

const dhruv = new Person("dd", 1997);
console.log(dhruv)

Person.prototype.calAge = function () {
  console.log(this.age);
};
//dhruv.calAge();
console.log(Person.__proto__)