let  s = "()()()()()()()(((((())))))"
let sArr = s.split("")
let counter = 0;
let max = 0
sArr.forEach((element,i) => {
    if(element == "("){
        counter++;
    }else if(element == ")"){
        counter--;
    }
    if(counter > max){
        max = counter
    }
});
console.log(max)