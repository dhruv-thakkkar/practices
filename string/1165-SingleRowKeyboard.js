let word = "cba"
let compareLetter = "a";
let diff = 0;
for(let i=0 ; i< word.length ; i ++){
    let letter = word.charAt(i);
    diff = diff + Math.abs(compareLetter.charCodeAt(0) - letter.charCodeAt(0))
    compareLetter = letter;
}
console.log(diff)