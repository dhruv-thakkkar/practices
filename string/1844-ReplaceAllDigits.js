/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let s = "a1c1e1";
     let result = "";
     for(let i=0;i<s.length;i++){
         if(s.charAt(i)* 1 == s.charAt(i)){
             let previousLetter = s.charAt(i-1);
             result = result + String.fromCharCode(previousLetter.charCodeAt(0)+parseInt(s.charAt(i)));
         }else{
             result = result + s.charAt(i);
         }
     }
     console.log(result) 
 };