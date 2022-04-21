let  s = "is2 sentence4 This1 a3";
sArr = s.split(" ")
let result = []
sArr.forEach((element,i) => {
    eleArr = element.split("")
    eleArr.forEach(ele => {
        if(ele*1){
            eleArr.pop()
            result[ele-1] = eleArr.join("")
        }
    });

});
console.log(result.join(" "))