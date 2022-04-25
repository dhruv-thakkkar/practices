let rings = "B7G1R6B8B1R1B6B1B9R3G3G7G0G9G3B2B2B2G2"

let result = {}
for(let i=0;i<rings.length;i++){
    let currentLetter = rings.charAt(i);
    let previousLetter = rings.charAt(i-1);
    if(currentLetter*1 == currentLetter){
        let push = previousLetter
        if(result[currentLetter]){
            push = result[currentLetter]+" "+previousLetter;
        }
        result[currentLetter] = push; 
    }
}
console.log(result)
count = 0;
for (const key in result) {
    let currentArr = result[key].split(" ");
    if(currentArr.includes("R") && currentArr.includes("G") && currentArr.includes("B")){
        count ++;
    }
 }
 console.log(count)