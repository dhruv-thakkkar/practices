/* 
!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
*/
let n = 1
let fact = 1
for (let i = n; i > 0; i--) {
    fact = fact * i
}
console.log(fact)