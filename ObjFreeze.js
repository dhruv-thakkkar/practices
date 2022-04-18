let obj = {
  name: "Dhruv",
};

obj.age = 22;
console.log(obj); //prints { name: 'Dhruv', age: 22 }
//Now what if i dont want this object to be changed. Use "Freeze"
Object.freeze(obj);

obj.work = "Software Engineer";
console.log(obj); //prints { name: 'Dhruv', age: 22 }
obj.name = "Deku";
console.log(obj); //prints { name: 'Dhruv', age: 22 } //you are not able to change the existing properties also.

//Now i want the object to allow change the existing properties but not allow to add new properties.

Object.seal(obj);

obj.degree = "Btech";
console.log(obj); //prints { name: 'Dhruv', age: 22 } //not allowed to add new property.

obj.name = "Deku";
console.log(obj); //prints { name: 'Deku', age: 22 } //name property is changed.
