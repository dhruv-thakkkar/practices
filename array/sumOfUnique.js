/* 
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
*/
let nums = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i< nums.length;i++){
    count = 0;
    for(let j = 0; j< nums.length;j++){
        if(nums[i] == nums[j]){
            count ++;
        }
    }
    if(count == 1){
        sum = sum + nums[i]
    }
}
console.log(sum)