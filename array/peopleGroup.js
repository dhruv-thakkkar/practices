let groupSizes =  [2,1,3,3,3,2]
let myObj = {};
let result = [];
//[[1],[0,5],[2,3,4]]
for (let i = 0; i < groupSizes.length; i++) {
    let currentEle = i;
    let sizeOfCurrentEleGrp = groupSizes[i];
    myObj[sizeOfCurrentEleGrp] = []
}
for (let i = 0; i < groupSizes.length; i++) {
    let currentEle = i;
    let sizeOfCurrentEleGrp = groupSizes[i];
    myObj[sizeOfCurrentEleGrp].push(i)
}
//{ '1': [ 5 ], '3': [ 0, 1, 2, 3, 4, 6 ] }
for(mO in myObj){
    //result.push(myObj[mO])
    let myArr = myObj[mO];
    let arr = []
    while(myArr.length) {
        result.push(myArr.splice(0,mO));
    }
}
console.log(result)