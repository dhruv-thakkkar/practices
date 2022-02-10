/* 
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
*/
/* let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];
let usedIndex = [];
let result = [];
for(let i=0;i<nums.length;i++){
    if(!usedIndex.includes(index[i])){
        usedIndex.push(index[i])
        result[index[i]] = nums[i];
    }else{
      result.splice(index[i],0,nums[i])
    }
}
console.log(result) */

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];
let result = [];
for(let i=0;i<nums.length;i++){
    result.splice(index[i],0,nums[i])
}
console.log(result)