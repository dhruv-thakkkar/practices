let m = 2,
  n = 3,
  indices = [
    [0, 1],
    [1, 1],
  ];
let arr = [];
let finalArr = [];
for (let i = 0; i < n; i++) {
  arr.push(0);
}
for (let i = 0; i < m; i++) {
  finalArr.push(arr);
}

for (let [x, y] of indices) {
  for (let i = 0; i < n; i++) {
    //finalArr[x][i]++;
    console.log(finalArr[x][i])
  }
  /* for (let j = 0; j < m; j++) {
    finalArr[j][y]++;
  } */
}
//console.log(finalArr);
