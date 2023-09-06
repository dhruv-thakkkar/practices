let n = 5;
let ans = 0;
let lastI = 1
for (let i = 1; i <= n; i++) {
  flag = true;
  for (let j = 0; j < 3; j++) {
    if (ans < n) {
      ans++;
      lastI = i
    }
  }
}
console.log("lastI---------->",lastI)
console.log(lastI%2!=0)
//console.log(flag)

/*

u = 1,2,3,7,8,9,13,14,15 i = 5,1

f = 4,5,6,10,11,12 i =6


num = 5

f1 = true
1 ->1 ->1 <= 5
    2 ->2 <= 5
    3 ->3 <= 5

f1 = false
2 ->1->4 <= 5
    2->5 <= 5
    3

3

4

5


 */
