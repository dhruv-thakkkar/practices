let s = "aaaabbbbcccc";
//s = "aaccbbcz";
let temp = new Array(26).fill(0);
for (let i = 0; i < s.length; i++) {
  temp[s.charCodeAt(i) - 97] = temp[s.charCodeAt(i) - 97] + 1
}
let ans = []
let flag = true;
for(let j=0;j<s.length;j++){
    for(let i=0;i<temp.length;i++){
        let pos = i;
        if(!flag){
            pos = 25 -i;
        }
        if (temp[pos] !== 0) {
            ans.push(String.fromCharCode(pos + 97));
            temp[pos] = temp[pos] - 1;
          }
        }    
        flag = !flag
}
console.log(ans)
