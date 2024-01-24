/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = {};
  let count = 0;
  for (const letter of stones) {
    map[letter] = (map[letter] || 0) + 1;
  }
  for (const letter of jewels) {
    if (map[letter]) {
      count += map[letter];
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
