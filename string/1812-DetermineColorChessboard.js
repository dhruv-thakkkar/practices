let  coordinates = "c7" ;
let cArr = coordinates.split("")
let result = ((cArr[0].charCodeAt(0)-96)+(cArr[1]*1))
if(result%2 == 0){
    console.log("false");
}else{
    console.log("true");
}