let word = "abcdefd", ch = "d";
let indexOfLetter = word.indexOf(ch)
let halfArr = word.slice(0,indexOfLetter+1).split("").reverse().join("")
let secondHalf = word.slice(indexOfLetter+1);
console.log(halfArr+secondHalf)