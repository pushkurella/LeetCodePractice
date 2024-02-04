/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map();
  for (const letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  for (const letter of t) {
    if (!map.has(letter)) {
      return letter;
    } else {
      if (map.get(letter) - 1 === 0) {
        map.delete(letter);
      } else map.set(letter, map.get(letter) - 1);
    }
  }
  return [...map.keys()][0];
};
console.log(findTheDifference("abcdab", "abcda"));
