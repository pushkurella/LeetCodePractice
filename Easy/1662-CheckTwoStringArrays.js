/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.reduce((acc, curr) => acc + curr);
  let str2 = word2.reduce((acc, curr) => acc + curr);
  return str1 === str2;
};
// 2nd approach
const arrayStringsAreEqual2 = (word1, word2) => {
  return word1.join("") === word2.join("");
};
