let arr = ["apple","banana","orange","apple","apple","orange","orange","orange"];
let max = {};
let maxi = 0;
let maxFruit = '';
for(let i=0;i<arr.length;i++){
    if(max[arr[i]]){
        max[arr[i]] = max[arr[i]] + 1;
        if(max[arr[i]]>maxi){
            maxi = max[arr[i]];
            maxFruit = arr[i];
        }
    }else{
        max[arr[i]] = 1;
    }
}