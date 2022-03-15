/* 
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.
*/
let nums = [3,3];
let smallest = nums[0];
let largest = nums[0];
let multiplier = 1;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i];
  }
  if (nums[i] > largest) {
    largest = nums[i];
  }
}
for (let i = 1; i <= largest; i++) {
  let ans = largest % i == 0 && smallest % i == 0;
  if (ans && i > multiplier) {
    multiplier = i;
  }
}

console.log(multiplier)