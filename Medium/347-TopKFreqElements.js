/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const result = [];
  const values = [...map.values()].sort((a, b) => b - a).slice(0, k);
  for (const [key, value] of map.entries()) {
    let index = values.indexOf(value);
    if (index !== -1) {
      result.push(key);
      values.slice(index, 1);
    }
    if (values.length < 1) {
      break;
    }
  }
  return result;
};
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
