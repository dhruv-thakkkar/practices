let word1 = "abc", word2 = "pqrst";
let word1Length = word1.length;
let word2Length = word2.length;

let str = ""
for(let i=0; i<Math.max(word1Length,word2Length);i++){
    word1[i] ? str = str + word1[i] : ""
    word2[i] ? str = str + word2[i] : ""
}
console.log(str)