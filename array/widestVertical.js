let points = [[15,69],[63,32],[100,34],[79,14],[97,33],[41,88],[68,27],[96,23],[88,52],[91,73],[66,18],[66,0],[0,87],[71,7],[64,42],[36,7],[73,50],[81,93],[88,8],[22,53],[90,8],[46,60],[74,1],[67,5],[55,91],[61,21],[33,46],[67,52],[13,100],[81,49],[35,57],[43,98],[69,11],[64,0],[56,54],[30,26],[41,92],[11,5],[54,13],[55,64],[11,4],[12,82],[19,41],[12,78],[100,29],[61,15],[45,72],[17,30],[85,69],[60,27],[86,93],[79,85],[40,90],[47,4],[83,37]]
let newArr = []
for (let i = 0; i < points.length; i++) {
    newArr.push(points[i][0])
}
newArr.sort(function(a,b){return a-b; })
console.log(newArr)
let count = 0;
newArr.forEach((element,i) => {
    if(newArr[i+1]){
        let ans = newArr[i+1] - newArr[i];
        if(ans > count){
            count = ans;
        }
    }
});
console.log(count)