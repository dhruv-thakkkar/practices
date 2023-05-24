const nums = [2,7,9] 
let original = 4

nums.forEach(element => {
    if(nums.includes(original)){
        original = original*2;
    }
});
console.log(original)