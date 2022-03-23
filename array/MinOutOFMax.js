/* 
Input: nums = [6,6,5]
Output: 9
Explanation: The optimal pairing is 

min(2, 1)
min(2, 5)
min(6, 6)
 = 1 + 2 + 6 = 9.
*/
let nums = [1,4,3,2];
let sum = 0 ;
nums.sort(function(a,b){return a-b})
for(let i =0;i<nums.length;i++){
    if(i%2 == 0){
        sum = sum + Math.min(nums[i],nums[i+1])
    }
}
console.log(sum)