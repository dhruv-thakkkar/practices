/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let vowels = "aeiou";
    forwardCount = 0;
    backwordCount = 0;
    for(let i=0;i<s.length/2;i++){
        let currentLetter = s.charAt(i).toLocaleLowerCase();
        if(vowels.includes(currentLetter)){
            forwardCount++;
        }
        let secondHalfLetter = s.charAt(s.length -1 - i).toLocaleLowerCase();
        if(vowels.includes(secondHalfLetter)){
            backwordCount++;
        }
    
    }
    if(forwardCount != backwordCount){
        return(false)
    }
    return(true)    
    };