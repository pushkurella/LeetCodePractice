/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = new Map();
  let totalSum = 0;
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) totalSum += key;
  }
  return totalSum;
};
// approach 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const unique = nums.filter((v) => nums.indexOf(v) == nums.lastIndexOf(v));
  return unique.length < 1 ? 0 : unique.reduce((a, c) => (a += c));
};
