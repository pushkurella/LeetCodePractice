/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // const arr = s.trim().split(" ");
  // return arr[arr.length -1].length;
  const set = new Set(s.trim().split(" "));
  return [...set.values()][set.size - 1].length;
};
