function palindrome(str) {
  for (let i = 0; i < Math.trunc(str.length / 2); i++) {
    const element = str[i];
    const lastEle = str[str.length - i - 1];
    if (element !== lastEle) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("aabaa"));
