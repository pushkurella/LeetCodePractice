/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  let count = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (nums.length % i === 0) count += nums[i - 1] * nums[i - 1];
  }
  return count;
};
