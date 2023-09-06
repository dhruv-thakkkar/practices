let nums = [1, 4, 5, 5, 1, 4, 6];

let i = 0;
let obj = {};
while (i < nums.length) {
  let currentNum = nums[i];
  if (obj[currentNum] > 0) {
    obj[currentNum] = obj[currentNum] + 1;
  } else {
    obj[currentNum] = 1;
  }
  i++;
}
let result = 0;
for (const iterator in obj) {
  if (obj[iterator] == 1) {
    result = iterator;
    break;
  }
}
console.log(result);
/* 
[1,4,5,5,1]
1
4
5
1
*/
