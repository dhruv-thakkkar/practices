let paths = [
  ["A", "B"],
  ["C", "E"],
  ["B", "D"],
  ["D", "C"],
  ["E", "F"],
];

let last = paths[0][1];
paths.forEach((element, i) => {
  paths.forEach((element2, i) => {
    if (last == element2[0]) {
      last = element2[1];
    }
  });
});
console.log(last);
