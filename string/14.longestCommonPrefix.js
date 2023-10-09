strs = ["cir", "car"];
let match = strs[0];

for (let i = 1; i < strs.length; i++) {
  const element = strs[i];
  let st = "";
  for (let j = 0; j < element.length; j++) {
    if (element[j] == match[j]) {
      st = st + element[j];
    }else{
        break;
    }
  }
  match = st;
}
console.log(match);
