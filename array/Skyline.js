let grid =[[0,0,0],[0,0,0],[0,0,0]];
let grid2 = [];
let result = [];
for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let maxOfColumn = 0;
    let rs = [];
    for (let j = 0; j < row.length; j++) {
        if (grid[j][i] > maxOfColumn) {
            maxOfColumn = grid[j][i];
        }
    }
    result.push(maxOfColumn);
}

for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let maxOfThatRow = Math.max(...row);
    let arr = [];
    for (let j = 0; j < row.length; j++) {
        arr.push(Math.min(result[j], maxOfThatRow))
    }
    grid2.push(arr)
}

let sum = 0;
for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
        sum = sum + grid2[i][j] - grid[i][j];
    }
}
console.log(sum)