let nums = [7,22,100,55,66,44,111];



function getSecondLargest(nums) {
    var flarge = 0;
    var slarge = 0;
    for (var i = 0; i < nums.length; i++) { 
            if (flarge < nums[i]) {
                slarge = flarge;
                flarge = nums[i];
            } else if (nums[i] > slarge) { 
                slarge = nums[i]

            }
        }
        return flarge; 
}

console.log(getSecondLargest(nums))