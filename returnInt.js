/* 
Write a function that takes a float number as an argument and returns an integer after the decimal point.

*/
function getAfterDecimal(num){
    let str = num.toString();
    let splittedStr = str.split(".");
    let answ = 0;
    if(splittedStr[1]){
        answ = splittedStr[1];
    } 
    console.log("Number after decimal -->",answ)
}
getAfterDecimal(5.123123);