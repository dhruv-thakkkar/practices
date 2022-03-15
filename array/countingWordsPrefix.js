/* 
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
*/
let words = ["flower", "flast", "practice", "attend"];
let pref = "fl";
let count = 0;
for (let i = 0; i < words.length; i++) {
  let str = words[i];
  let res = true;
  for (let j = 0; j < pref.length; j++) {
      if(pref.charAt(j) != str.charAt(j)){
        res = false;
      }
  }
  if(res){
      count++;
  }
  /* console.log(words[i])
  console.log(res)
  console.log("------------") */
}

console.log(count)