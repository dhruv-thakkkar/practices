let num = 90;
let highest = 90;
let lowest = 90;
let numsArr = num.toString().split("");
let uniq = [...new Set(numsArr)];
for (let i = 0; i < uniq.length; i++) {
  let newArr = [];
  let newArr2 = [];
  for (let j = 0; j < numsArr.length; j++) {
    if (numsArr[j] == uniq[i]) {
      newArr.push(9);
      newArr2.push(0);
    } else {
      newArr.push(numsArr[j]);
      newArr2.push(numsArr[j]);
    }
  }
  let changed = parseInt(newArr.join(""));
  let changed2 = parseInt(newArr2.join(""));
  if (changed > highest) {
    highest = changed;
  }
  if (changed2 < lowest) {
    lowest = changed2;
  }
}
console.log(highest - lowest);

/*

--1--
1 9
1 9 
8 8
9 9
1 9

--8--
1 1
1 1
8 9
9 9
1 1

--9--
1 1
1 1
8 8
9 9
1 1 */
