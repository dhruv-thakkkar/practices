let pascal = [];
let numRows = 5;
for (let i = 0; i < numRows; i++) {
  let arr = [];
  let beforePascal = pascal[i - 1];
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      arr.push(1);
    } else {
      arr.push(beforePascal[j] + beforePascal[j - 1]);
    }
  }

  pascal.push(arr);
}
console.log("final pascal==>", pascal);
