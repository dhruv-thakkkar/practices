let left = 990
let right = 1048
let count = 0
for(let i = left; i<=right;i++){
    let oneCount = Number(i).toString(2).split("1").length-1;
    let isPrime = true
    if(oneCount==1){
        isPrime = false
    }else if(oneCount>2){
        for(let j=2;j<oneCount;j++){
            if(oneCount%j==0){
                isPrime = false;
            }
        }
    }
    if(isPrime){
        console.log("xxxIS PRIME->",oneCount)
        count++
    }
}
console.log("count-->",count)