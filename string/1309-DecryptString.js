/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let alphas = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    for(let i=0;i<s.length;i++){
        if(s.charAt(i+2) == "#"){
            let letter = s.charAt(i)+s.charAt(i+1)
            result = result + (alphas.charAt(letter-1))
            i++;
        }else if(s.charAt(i) != "#"){
            let letter = s.charAt(i)
            result = result + (alphas.charAt(letter-1))
        }
    }
    return(result)
};