/* 
Input: S = "aaaba"
Output: 8
Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8.

*/
/* -------------------PENDING--------------------- */
const str = 'aaaaaaaaaa';
const countSpecialStrings = (str = '') => {
   let { length } = str;
   let res = length;
   if(!length){
      return length;
   };
   for (let j = 0, i = 1; i < length; ++ i) {
        console.log("i-->",i)
        console.log("j-->",j)
      if (str[i] === str[j]) {
         res += i - j;
      } else {
         j = i;
      }
      console.log("res-->",res)
      console.log("----")
   };
   //console.log(res)
   return res;
}
//console.log(countSpecialStrings(str));
(countSpecialStrings(str));