/* 
You're given a string of words. You need to find the word "Nemo", and return a string like this:
 "I found Nemo at [the order of the word you find nemo]!".
If you can't find Nemo, return "I can't find Nemo :(".
Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/
let str = "I am finding Nemo";
let strArr = str.split(" ");
strArr.forEach(function(val,i){
    if(val.toLocaleLowerCase() == "nemo"){
        console.log("I found Nemo found at %s!",i+1)
    }
});