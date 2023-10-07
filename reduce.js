/* Find MAx */
let arr = [5, 1, 3, 2, 6];

let ans = arr.reduce(function (ac, del) {
  if (del > ac) {
    ac = del;
  }
  return ac;
});
console.log("ans-->", ans);

/* Unique Age */

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

let res = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("res-->", res);
