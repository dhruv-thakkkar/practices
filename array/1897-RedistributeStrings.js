let words = ["ab", "b", "aab"];
let flag = true;
const sum = new Array(26).fill(0);
for (const word of words) {
  for (let i = 0; i < word.length; i++) {
    sum[word.charCodeAt(i) - 97]++;
  }
}
console.log(sum);

sum.forEach((element) => {
  if (element % words.length !== 0) {
    flag = false;
  }
});
console.log(flag);