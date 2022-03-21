/* 
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [0,-1,1,-2,2]

*/

let n = 4;
let result = [0];
for (let i = 0; i < n; i++) {
    if (result.length != n) {
        result.push(-(i + 1));
    }
    if (result.length != n) {
        result.push(i + 1);
    }
}
if(n%2==0){
    result[result.length-2] = result[result.length-2] - (result[result.length-1]);
}
result.sort(function(a,b){
    return a-b;
})
console.log(result)