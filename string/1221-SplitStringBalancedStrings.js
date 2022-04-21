let s = "RLRRLLRLRL";
let cnt = 0;
let ans = 0;
for (let i = 0; i < s.length; i++) {
    let currentLetter = s.charAt(i);
    if (currentLetter == "R") {
        cnt++
    } else {
        cnt--
    }
    if (cnt == 0) {
        ans++
    }
}
console.log(ans)