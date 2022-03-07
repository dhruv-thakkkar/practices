/* 
Input: mat = [[1,2,3,1,2],[4,5,6,1,2],[7,8,9,1,2],[1,1,1,1,2],[2,2,2,1,2]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
*/
let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let sum = 0;
let len = mat.length;
for (let i = 0; i < len; i++) {
    sum += mat[i][i] + mat[len-i-1][i];
}

if(len % 2 == 0){
    console.log(sum)
}else{
    console.log(sum-mat[Math.floor(len/2)][Math.floor(len/2)])
    
}