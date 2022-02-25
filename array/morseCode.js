/* 
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
*/
let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
let morsedUniqueWords = [];
let words = ["gin","zen","gig","msg"];
words.forEach(word => {
    let morsedWord = "";
    for(let i=0;i<word.length;i++){
        morsedWord = morsedWord + (morse[word[i].charCodeAt(0) - 97])
    }
    if(!morsedUniqueWords.includes(morsedWord)){
        morsedUniqueWords.push(morsedWord)
    }
});
console.log(morsedUniqueWords.length)