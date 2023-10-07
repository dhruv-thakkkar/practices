const users = [
  {
    firstName: "dhruv",
    lastName: "thakkar",
    age: 22,
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

let ans = users
  .filter(function (x) {
    if (x.age == 22) {
      return true;
    }
  })
  .map(function (y) {
    return y.firstName;
  });
console.log(ans);

let reduceAns = users.reduce(function (acc, curr) {
  if (curr.age == "22") {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log("reduceAns-->", reduceAns);
