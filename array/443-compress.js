/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let last = [chars[0]];
  let result = [];
  for (let index = 1; index < chars.length; index++) {
    const element = chars[index];
    if (last.includes(element)) {
      last.push(element);
    } else {
      result.push(last[0]);
      if (last.length > 1) {
        result.push(last.length);
      }
      last = [element];
    }
    if (chars.length - 1 == index) {
      result.push(last[0]);
      if (last.length > 1) {
        result.push(last.length);
      }
      last = [element];
    }
  }
  return result.join("").split("");
};
