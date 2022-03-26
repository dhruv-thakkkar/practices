/*
Input: boxes = "001011"
Output: [11,8,5,4,3,4]
*/
let boxes = "110";
let boxesArr = boxes.split("")
let result = [];

for (let i = 0; i < boxesArr.length; i++) {
    let destination = (boxesArr[i])
    let sum = 0;
    for (let j = 0; j < boxesArr.length; j++) {
        if(boxesArr[j] == 1){
            sum = sum + Math.abs(j - i);
            //console.log("1 is in-->",sum)
        }
    }
    result.push(sum)
}
console.log(result)