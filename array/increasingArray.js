/* 
Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].
*/
let nums  = [1,1,1];
let nums2 = nums.slice(0);
let count = 0;
let last = nums[0];
for (let i = 0; i < nums.length; i++) {
  if(nums[i] >= nums[i+1]){
    nums[i+1] = (nums[i] + 1)
  }
}
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + (nums[i]- nums2[i])
}
console.log(sum)
