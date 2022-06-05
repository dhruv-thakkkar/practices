let  n = 3;
let ans = n%2;
let str = ""
if(ans == 0){
    let strLen = n-1;
    //console.log(strLen)
    for(let i=0;i<strLen;i++){
        str = str + "a"
    }
    str = str + "b"
}else{ //odd
    let strLen = n;
    for(let i=0;i<strLen;i++){
        str = str + "a"
    }
    //str = str + "bc"
}
console.log(str)