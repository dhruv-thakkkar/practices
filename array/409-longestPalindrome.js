let s = "abccccdd"
let hasMap = {}
for(let i = 0; i<s.length;i++){
    let current = s.charAt(i)
    if(!hasMap[current]){
        hasMap[current] = 1;
    }else{
        hasMap[current] = hasMap[current] +1
    }
}
let flag = false
let count = 0
let cc = 1
for (const key in hasMap) {
    if(hasMap[key]%2 ==0){
        count = count + hasMap[key] 
    }else{
        flag = true
        if(hasMap[key]> cc){
            cc = hasMap[key] 
        }
    }
}
if(flag){
    console.log(count+cc)

}else{
    console.log(count)
}