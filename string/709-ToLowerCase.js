//console.log("A".charCodeAt(0))
//console.log("Z".charCodeAt(0))
let  s = "Hello";
let result = "";
for(let i=0;i<s.length;i++){
    let currentLetter = s.charAt(i);
    if(currentLetter.charCodeAt(0) >=65 && currentLetter.charCodeAt(0) <=90){
        let loweredCharCode = currentLetter.charCodeAt(0)+32;
        let str = String.fromCharCode(loweredCharCode)
        result = result + str;
    }else{
        result = result + currentLetter;
    }
}
console.log(result)