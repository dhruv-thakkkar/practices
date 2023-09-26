let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 4],
  [2, 4, 2, 2],
  [2, 5, 2, 2],
];
let count = 0;
const rows = new Map();
for(let r = 0; r < grid.length; r++){
  const row = JSON.stringify(grid[r])
  rows.set(row, 1 + (rows.get(row) || 0))
}

console.log("rows--->",rows);
for (let c = 0; c < grid.length; c++) {
  const col = JSON.stringify(grid.map((row) => row[c]));
  console.log("col-->", col);
  count += rows.get(col) || 0;
  console.log("rows.get(col)--->>",rows.get(col))
  console.log("count--->>",count)
}
