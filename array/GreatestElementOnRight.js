/* 
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
*/

let arr = [400]
let result = [];

for (let i = 1; i <= arr.length; i++) {
  let currentElement = arr[i];
  for (let j = i + 1; j < arr.length; j++) {
    //console.log(arr[j])
    if (arr[j] > currentElement) {
      currentElement = arr[j];
    }
  }
  if(arr.length>1 && currentElement){
      result.push(currentElement);
  }
  if (arr.length == i) {
    result.push(-1);
  }
}
console.log(result)