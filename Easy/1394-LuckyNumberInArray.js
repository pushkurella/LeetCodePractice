/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let result = [];
  for (const [key, value] of map.entries()) {
    if (Number(key) === value) {
      result.push(key);
    }
  }
  result.sort((a, b) => b - a);
  return result.length > 0 ? result[0] : -1;
};
// another approach
var findLucky = function (arr) {
  let map = new Map();
  let max = 0;

  for (let num of arr) {
    map.set(num, map.get(num) + 1 || 1);
  }

  for (let val of [...map]) {
    if (val[0] == val[1]) {
      max = Math.max(max, val[1]);
    }
  }

  if (max != 0) return max;
  else return -1;
};
