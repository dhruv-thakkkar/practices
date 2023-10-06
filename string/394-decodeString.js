s = "3[a]2[bc]";
/* 
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "3[a2[c]]"
Output: "accaccacc"
*/

let stack = [];
for (let i = 0; i < s.length; i++) {
  const element = s.charAt(i);
  if (element == "]") {
    let lastLetter = stack.pop();
    let lastNumber = stack.pop();
    let str = lastLetter.repeat(lastNumber);
    let stackLastEle = stack[stack.length - 1];
    if (
      stackLastEle != undefined &&
      stackLastEle.toLowerCase() != stackLastEle.toUpperCase()
    ) {
      //if alpha
      stack[stack.length - 1] = stackLastEle + str;
    } else {
      stack.push(str);
    }
  } else if (element != "[") {
    let stackLastEle = stack[stack.length - 1];
    if (
      stackLastEle != undefined &&
      stackLastEle.toLowerCase() != stackLastEle.toUpperCase()
    ) {
      stack[stack.length - 1] = stackLastEle + element;
    } else {
      stack.push(element);
    }
    console.log(stack);
  }
}
console.log(stack);
