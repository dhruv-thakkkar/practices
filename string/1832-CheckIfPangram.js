let sentence = "thequickbrownfoxjumpsoverthelazydog";
let allAlpha = "abcdefghijklmnopqrstuvwxzy"

if(sentence.length < 26){
    console.log(false)
}

for(let i = 0; i < allAlpha.length;i++){
    if(!sentence.includes(allAlpha.charAt(i))){
        console.log("aaaaaaaaa")
    }
}