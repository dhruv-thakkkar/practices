/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let q = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s.charAt(i))) {
      q++;
    }
  }
  let max = q;
  for (let j = k; j < s.length; j++) {
    let removedWord = s.charAt(j - k);
    let addedWord = s.charAt(j);
    if (vowels.includes(removedWord)) {
      q--;
    }
    if (vowels.includes(addedWord)) {
      q++;
    }
    console.log("q-->>", q);
    if (q > max) {
      max = q;
    }
  }
  return max;
  
  };