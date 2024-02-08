/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const map = new Map();
  for (const num of arr) {
    if (map.has(2 * num) || map.has(num / 2)) {
      return true;
    } else {
      map.set(num, num);
    }
  }
  return false;
};
