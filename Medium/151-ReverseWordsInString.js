/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((str) => str.trim().length && str.trim())
    .reverse()
    .join(" ");
};
console.log(reverseWords("  the sky  is blue"));
