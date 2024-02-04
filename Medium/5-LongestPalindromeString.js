/**
 * @param {string} s
 * @return {string}
 */
// var isPalindrome = (str) => str === str.split("").reverse().join("");
// var longestPalindrome = function (s) {
//   if (s.length === 1) return s;
//   let longString = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; j <= s.length; j++) {
//       let str = s.substring(i, j);
//       if (isPalindrome(str) && str.length > longString.length) {
//         longString = str;
//       }
//     }
//   }
//   return longString;
// };
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0,
    maxLength = 1;
  function expandAroundCenter(left, right) {
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      // current substring length greater than maxlength then update the value
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      // expand left and right wise
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1); // for cases like bab
    expandAroundCenter(i, i + 1); // for cases like bb
  }
  return s.substring(start, start + maxLength);
};
console.log(longestPalindrome("babad"));
