let nums = [0, 1, 0, 3, 4];
let zeroCounter = 0;
for (let i = 0; i < nums.length; i++) {
  const currentElement = nums[i];
  if(currentElement == 0){
    zeroCounter++
  }else{
    let temp = nums[i]
    nums[i] = 0
    nums[i-zeroCounter] = temp
  }
}
console.log("nums--->",nums)