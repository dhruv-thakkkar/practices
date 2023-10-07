const users = [
  {
    firstName: "dhruv",
    lastName: "thakkar",
    age: 21,
  },
  {
    firstName: "ram",
    lastName: "shah",
    age: 22,
  },
  {
    firstName: "shyam",
    lastName: "patel",
    age: 23,
  },
  {
    firstName: "raj",
    lastName: "desai",
    age: 24,
  },
];

function getFullName() {
  return x.firstName + " " + x.lastName;
}
console.log(users.map(getFullName));
