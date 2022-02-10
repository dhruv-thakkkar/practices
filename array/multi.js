/* 
Given an input array = [1, 2, 3, 4]. return the following output [24, 12, 8, 6].
 i.e. the output array element is multiplied by each other except the number at that position.
*/
let resultArr = [];
let arr = [1, 2, 3, 4];
arr.forEach(function (val, j) {
  let abc = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != j + 1) {
      abc = abc * arr[i];
    }
  }
  resultArr.push(abc);
});
console.log(resultArr);
