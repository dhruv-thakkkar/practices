let  word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];
let newWord1 = "";
word1.forEach(element => {
    newWord1 = newWord1+element;
});
let newWordArr1 = [newWord1];

let newWord2 = "";
word2.forEach(element => {
    newWord2 = newWord2+element;
});
let newWordArr2 = [newWord2];

console.log(JSON.stringify(newWordArr1) === JSON.stringify(newWordArr2))

    