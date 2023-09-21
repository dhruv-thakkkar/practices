let word1 = "abbzzca";
let word2 = "babzzcz";

function checkEq(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < word1.length; i++) {
    const w1 = word1[i];
    const w2 = word2[i];
    if (obj1[w1]) {
      obj1[w1]++;
    } else {
      obj1[w1] = 1;
    }

    if (obj2[w2]) {
      obj2[w2]++;
    } else {
      obj2[w2] = 1;
    }
  }

  const letters =
    Object.keys(obj1).sort().join("") === Object.keys(obj2).sort().join("");
  const vals =
    Object.values(obj1).sort().join("") === Object.values(obj2).sort().join("");
  return letters && vals;
}
console.log("result-->", checkEq(word1, word2));
