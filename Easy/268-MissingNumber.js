/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let actualTotal = (nums.length * (nums.length + 1)) / 2;
  let numsTotal = nums.reduce((a, b) => a + b);
  return actualTotal - numsTotal;
};
