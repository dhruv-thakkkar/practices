let vowels = ["a","e","i","o","u"];
let string = "Vikram";
let result = "";
for(let i=0 ; i< string.length ; i ++){
    let word = string.charAt(i);
    if(!vowels.includes(word)){
        result = result + word;
    }
}
console.log(result)