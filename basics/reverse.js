let str = "abc";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr = revStr + str[i];
}
console.log(revStr);
