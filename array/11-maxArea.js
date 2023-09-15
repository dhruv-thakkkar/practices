const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let lCounter = 0;
let max = 0;
let rCounter = height.length - 1;
for (let i = 0; i < height.length; i++) {
  let leftEle = height[lCounter];
  let rightEle = height[rCounter];
  let algo = Math.min(leftEle, rightEle) * (rCounter - lCounter);
  if (algo > max) {
    max = algo;
  }
  if (height[lCounter] > height[rCounter]) {
    rCounter--;
  } else {
    lCounter++;
  }
}
console.log(max);
