let prices = [7, 1, 5, 3, 6, 4];
//let prices = [7, 6, 4, 3, 1];
let profit = 0;
for (let i = 0; i < prices.length; i++) {
  const element = prices[i];
  const nextElement = prices[i + 1];
  let sub = element - nextElement;
  if(nextElement > element){
      console.log("element--->>", element);
      console.log("nextElement--->>", nextElement);
      let sub = nextElement - element
      console.log("sub--->>", sub);
  }
  if (nextElement > element && sub > profit) {
    profit = sub;
  }
}
console.log(profit);
