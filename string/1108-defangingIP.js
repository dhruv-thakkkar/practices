let address = "1.1.1.1";
let addArr = address.split("")

for (let i = 0; i < addArr.length; i++) {
    let word = addArr[i];
    if(word == "."){
        addArr[i] = "[.]"
    }
}
let result = addArr.join("")
console.log(result)