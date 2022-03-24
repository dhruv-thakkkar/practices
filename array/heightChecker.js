/* 
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
heights:  [1,1,4,2,1,3]
expected: [1,1,1,2,3,4]
Indices 2, 4, and 5 do not match.
*/
count = 0;
let  heights = [1,2,3,4,5]
let sortedArr = heights.slice();
sortedArr.sort(function(a,b){return a-b;})
for (let i = 0; i < heights.length; i++) {
    if(heights[i] != sortedArr[i]){
        count++;
    }
}

console.log(count)