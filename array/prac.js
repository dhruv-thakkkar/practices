let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
let result = [];
image.forEach((element) => {
  let reversedImage = [];
  for (let i = element.length - 1; i >= 0; i--) {
    let el = element[i]
    if(el == 0){el = 1}else{ el = 0} 
    reversedImage.push(el);
  }
  result.push(reversedImage)
});
console.log(result)
