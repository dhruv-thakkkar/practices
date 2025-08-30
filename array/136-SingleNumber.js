let nums = [6, 1, 4, 5, 5, 1, 4, 9];

let result = 0;
console.log(nums)
for (let num of nums) {
  console.log("result--->",result)
  console.log("num   --->",num)
  console.log("report--->",result ^ num)
  console.log("----------------")
  result = result ^ num;
}

//console.log(result);
/* 
[1,4,5,5,1]
1
4
5
1
*/
