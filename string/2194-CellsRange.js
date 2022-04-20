let s = "K1:L2";
let result = []
/* let arr = s.split(":")

let word1 = arr[0].split("")[0]; 
let word1Len = arr[0].split("")[1]; ;
let word2 = arr[1].split("")[0]; ;
let word2Len = arr[1].split("")[1]; ; */

const [word1, word1Len, , word2, word2Len] = s;


for(let i= word1.charCodeAt(0) ; i<=  word2.charCodeAt(0) ;i++){
    let aa = (String.fromCharCode(i))
    for(j = word1Len ; j <=word2Len ; j++){
        result.push(aa+j)
    }
}
console.log(result)