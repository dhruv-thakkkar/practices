/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let sArr = s.split("")
    let newArr = []
    let count = 0;
    let startPoint = 0;
    sArr.forEach((element, i) => {
        if (element == "(") {
            count++
        } else {
            count--
        }
        if (count == 0) {
            let str = (sArr.slice(startPoint, i + 1).join(""))
            newArr.push(str)
            startPoint = i + 1
        }
    });
    let result = ""
    newArr.forEach((element, i) => {
        let currentArr = element.split("");
        currentArr.forEach((element2, j) => {
            if (j > 0 && (j != element.length - 1)) {
                result = result + (element2)
    
            }
        });
    });
    return(result)   
};