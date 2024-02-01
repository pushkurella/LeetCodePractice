/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var maxVowels = function (s, k) {
//   let first = "";
//   for (let i = 0; i < k; i++) {
//     first += s[i];
//   }
//   console.log(first);
//   let newString = first;
//   let maxCount = vowelCount(first);
//   for (let i = k; i < s.length; i++) {
//     newString = newString.substring(1) + s[i];
//     console.log("new", newString);
//     maxCount = Math.max(maxCount, vowelCount(newString));
//   }
//   return maxCount;
// };

// var vowelCount = function (str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// Better approach
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let array = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (array.includes(s[i])) {
      count++;
    }
  }
  let max = count;
  for (let i = k; i < s.length; i++) {
    if (array.includes(s[i])) {
      count++;
    }
    if (array.includes(s[i - k])) {
      count--;
    }
    max = Math.max(max, count);
  }
  return max;
};
console.log(maxVowels("abciiidef", 3));
