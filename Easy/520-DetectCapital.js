/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const allCapsRegex = new RegExp(/^[A-Z]+$/);
  const allSmallRegex = new RegExp(/^[a-z]+$/);
  const firstLetterCapRegex = new RegExp(/^[A-Z][a-z]+$/);
  return (
    allCapsRegex.test(word) ||
    allSmallRegex.test(word) ||
    firstLetterCapRegex.test(word)
  );
};
// another approach
var detectCapitalUse = function (word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  );
};
// summed regex
var detectCapitalUse = function (word) {
  // either all capitals, all small cases, or Capital follow by small cases
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};
