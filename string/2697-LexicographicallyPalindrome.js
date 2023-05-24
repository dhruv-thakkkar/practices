var makeSmallestPalindrome = function(s) {
    let newString = ""
    for(let i=0 ; i< s.length ; i ++){
        let firstWord = s.charAt(i);
        let lastWord = s.charAt(s.length -i - 1);
        if(firstWord!==lastWord){
            if(firstWord.charCodeAt(0)>lastWord.charCodeAt(0)){
                firstWord = lastWord
            }
        }
        newString = newString + firstWord 
    }
    return(newString)
}    