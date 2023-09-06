/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+ str2 !=str2+str1) return "x" 
    if(str1.includes(str2)){
        if(str1.length%str2.length == 0){
            return str2
        }else{
            let half = str2.slice(0,str2.length/2)
            return half
        }
        
    }else{
        return "x";
    }
};
console.log(gcdOfStrings("ABCDEF","ABC"))