let str = "hello";
let sum = 0;
for (let i = 0; i < str.length - 1; i++) {
  const element = str[i];
  const nextElement = str[i + 1];
  let diff = element.charCodeAt() - nextElement.charCodeAt();
  sum = diff < 0 ? sum + diff * -1 : sum + diff;
}
console.log(sum);
