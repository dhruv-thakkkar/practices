let s = "aA";
let string = s.split("");
const vowels = ["a", "e", "i", "o", "u"];
const arr1 = [];
const arr2 = [];
for (let index = 0; index < string.length; index++) {
  const element = string[index];
  if (vowels.includes(element.toLocaleLowerCase())) {
    arr1.push(element);
    arr2.push(index);
  }
}
console.log("arr2--->",arr2)
console.log("arr1--->",arr1)
let reversedArr1 = arr1.reverse();
arr2.forEach((element, index) => {
  string[element] = reversedArr1[index];
});
console.log(string.join(""));
