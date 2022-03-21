/* 

    s[i] == 'I' if perm[i] < perm[i + 1], and
    s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

 

Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
*/
let s = "DDI";
let result = [];
low = 0;
high = s.length;
for(let i=0;i<s.length;i++){
    let word = s.charAt(i);
    if(word == 'I') {
        result[i] = low
        low++
    } else {
        result[i] = high
        high--
    }
}
result[s.length] = low
console.log(result)
