/* 
Merge two sorted arrays [1, 3, 5, 8], [2, 3, 4, 9]
into one which is also sorted without using any inbuilt js function. 
output = [1,2,3,3,4,5,8,9]
*/
let arr1 = [1, 3, 5, 8];
let arr2 = [2, 3, 4, 9];
let newArr = [];
arr1.forEach(function(val,i){
    let strEle = val;
    newArr.push(strEle);
});

arr2.forEach(function(val,i){
    let strEle = val;
    newArr.push(strEle);
});
console.log(newArr.sort())