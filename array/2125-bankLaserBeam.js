let bank = ["000","111","000"]
let ansArr = [];
let ans = 0;
bank.forEach(element => {
    let num = 0;
    element.split("").forEach(element1 => {
        num = num + parseInt(element1); 
    });
    if(num > 0){
        ansArr.push(num)
    }
});
ansArr.forEach((element,i) => {
    let current = element;
    let next = ansArr[i+1];
    if(current && next){
        let mult = current * next;
        ans = ans + mult;
    }

});
console.log(ans)