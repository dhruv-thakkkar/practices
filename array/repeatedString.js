/* 
arr = [flower,flask,flush]
result = 2 , that is fl common in all.
*/
let arr = ["flower","flush","flash"];
let word = '';
let Nextword = '';
let counter = 0;
for(let i = 0; i< arr.length;i++){
    word = arr[i];
    Nextword = arr[i+1];
    //console.log(word)
    for(let j=0; j<word.length;j++){
        if( (Nextword && word) && (Nextword[j] && word[j])  && (Nextword[j] == word[j])){
            console.log(Nextword)
            counter ++;
        }
    }
}
console.log(counter);