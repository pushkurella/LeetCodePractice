/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var set = new Set(nums);
  var arr = [...set.values()].sort((a, b) => b - a);
  console.log(arr);
  if (arr.length < 3) {
    return arr[0];
  }
  return arr[2];
};
console.log(thirdMax([2, 3, 1]));
