let string = "ApplewoodsTownship";
let word = "woods";
count = 0;
for (let i = 0; i < string.length; i++) {
    let newStr = "";
    if (string.charAt(i) == word.charAt(0)) {
        for (let j = 0; j < word.length; j++) {
            newStr = newStr + string.charAt(i + j);
        }
        if (newStr == word) {
            count++;
        }
    }
}
console.log(word + " comes " + count + " time in " + string);
