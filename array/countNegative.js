let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
let count = 0;
for(let i = 0; i < grid.length; i++){
    let arr = grid[i];
    for(let j = 0; j < arr.length; j++){
        if(arr[j]<0){
            count++
        }
    }
}
console.log(count)