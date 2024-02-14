/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const vowelArr = [];
  for (const letter of s) {
    if (set.has(letter)) {
      vowelArr.push(letter);
    }
  }
  let result = "";
  for (const letter of s) {
    if (set.has(letter)) {
      result += vowelArr.pop();
    } else {
      result += letter;
    }
  }
  return result;
};
console.log(reverseVowels("hello"));
/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = "aeiouAEIOU";
// another approach
var reverseVowels = function (s) {
  const arr = [...s];

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    while (!VOWELS.includes(arr[i]) && i < j) {
      i++;
    }

    while (!VOWELS.includes(arr[j]) && i < j) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
};
