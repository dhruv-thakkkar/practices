/* 

Input: nums = [4,3,2,1]
Output: 2
Explanation: 
i=0: 0 mod 10 = 0 != nums[0].
i=1: 1 mod 10 = 1 != nums[1].
i=2: 2 mod 10 = 2 == nums[2].
i=3: 3 mod 10 = 3 != nums[3].
2 is the only index which has i mod 10 == nums[i].

*/
let result = -1;
let nums = [1,2,3,4,5,6,7,8,9,0]
for(let i=0;i< nums.length;i++){
    if(i % 10 == nums[i]){
        result = i;
        break; 
    }
}
console.log(result)