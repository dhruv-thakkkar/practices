/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    rightTotal = rightTotal + element;
  }

  let leftTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    rightTotal = rightTotal - element;
    if (leftTotal == rightTotal) {
      return i;
    }
    leftTotal = leftTotal + element;
  }
  return -1;
};
