let nums = [5,1,5,2,5,3,5,4]
let largest = 0;
let asd = 0;
for(let i = 0; i< nums.length;i++){
    count = 0;
    for(let j = 0; j< nums.length;j++){
        if(nums[i] == nums[j]){
            count ++;
        }
    }
    if(count > largest){
        largest = count;
        asd = nums[i]
    }
}
console.log(asd)