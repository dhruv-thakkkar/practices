let nums = [1, 2, 3, 4, 5];
let k = 3;
let sum = 0;
for (let i = 0; i < k; i++) {
  sum = sum + nums[i];
}
let max = sum;
for (let i = k; i < nums.length; i++) {
  sum = sum - nums[i - k] + nums[i];
  console.log(sum)
  if (sum > max) {
    max = sum;
  }
}
console.log(max/k)