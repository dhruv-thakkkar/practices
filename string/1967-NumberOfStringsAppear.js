let patterns = ["a","a","a","c"], word = "ab",count = 0;
patterns.forEach((element,i) => {
    if(word.includes(element)){
        count++
    }
});
console.log(count)