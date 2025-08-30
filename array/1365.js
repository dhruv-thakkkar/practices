const nums = [8, 1, 2, 2, 3];
function lowest(nums) {
let sortedArr = [...nums].sort((a, b) => a - b);
  let map = {};
  for (let i = 0; i < sortedArr.length; i++) {
    if (map[sortedArr[i]] === undefined) {
      map[sortedArr[i]] = i;
    }
  }
  console.log(map)
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log("element--->",element)
    nums[i] = map[element];
  }
  console.log(nums)
  return nums;
}
console.log(lowest(nums))
