/* 
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.
*/
let nums = [2,7,9], original = 4;
//16

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] == original){
            original = (original *2)
        }
    }
}
console.log(original)