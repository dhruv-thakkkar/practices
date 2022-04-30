let s = "Let's take LeetCode contest";
sArr = s.split(" ");
let result = [];
sArr.forEach(element => {
    let reversedEle = element.split("").reverse().join("");
    result.push(reversedEle)
});
console.log(result.join(" "))