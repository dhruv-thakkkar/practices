/* Pointer Question */

let s = "abc";
let t = "xahbgdc";
let count = 0
for (let i = 0; i < t.length; i++) {
    const ele = t[i];
    if(ele == s[count]){
        count++
    }
}
console.log(count === s.length)