/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const resultMap = new Map(
    [...map.entries()].sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return a[0] > b[0] ? 1 : -1;
    })
  );
  for (const [key] of resultMap.entries()) {
    if (key % 2 === 0) return key;
  }
  return -1;
};
// another approach
// Time complexity: O(n)
// Space complexity: O(n)

var mostFrequentEven = function (nums) {
  const map = new Map();
  let element = Infinity,
    maxFreq = 0;

  for (const num of nums) {
    if (num % 2 == 0) {
      let freq = 1;

      if (map.has(num)) freq = map.get(num) + 1;

      map.set(num, freq);

      if (freq > maxFreq || (freq == maxFreq && num < element)) {
        element = num;
        maxFreq = freq;
      }
    }
  }

  return maxFreq == 0 ? -1 : element;
};
