/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};
// without using inbuilt methods
class Solution {
  check(s) {
    let i = 0,
      j = s.length - 1;
    while (i <= j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }

  firstPalindrome(words) {
    for (let word of words) {
      if (this.check(word)) {
        return word;
      }
    }
    return "";
  }
}
