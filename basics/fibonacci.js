/* 
Fibonacci : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……

*/

/* 
0,1,1,2
*/

let start = 0;
let next = 1;
let sum = 0;
let i = 0;
while (i != 8) {
  console.log(sum);
  sum = start + next;
  next = start;
  start = sum;
  i++;
}
