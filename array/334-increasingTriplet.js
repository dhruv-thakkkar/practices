let nums = [1, 2, 0, 4];
let flag = false;
if (nums.length < 3) {
  flag = false;
}
let first = nums[0];
let second = Math.max(...nums);
for (let index = 1; index < nums.length; index++) {
  let element = nums[index];

  if (element > second) {
    console.log(element);
    flag = true;
  }

  if (element > first) {
    second = element;
  }
  if (element < first) {
    first = element;
  }
}
console.log("flag--->", flag);
