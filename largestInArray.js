let a = ["pear", "apple", "orange", "apple"];
let b = {};
let max = "",
maxi = 0;

for(let k of a){
    if(b[k]){
        b[k] = b[k] + 1;
    }else{
        b[k] = 1;
    }
    if (maxi < b[k]) {
        max = k;
        maxi = b[k];
    }

}
console.log(max)