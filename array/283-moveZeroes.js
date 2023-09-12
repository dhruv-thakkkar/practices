let nums = [0, 1, 0, 3, 12];

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  if (element == 0) {
    nums[i] = nums[i + 1];
    if (nums[i + 1]) {
      nums[i + 1] = 0;
    }
  }
}
console.log(nums);
