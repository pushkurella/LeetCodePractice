/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let count = 0;
  for (let i = 0; i < k; i++) {
    count += nums[i];
  }
  if (nums.length === k) return count / k;
  let max = count;
  let average = count;
  for (let i = 1; i <= nums.length - k; i++) {
    average = average - nums[i - 1] + nums[i + k - 1];
    max = Math.max(max, average);
  }
  return max / k;
};
// console.log(findMaxAverage([4, 2, 1, 3, 3], 2));
// Better approach
// function findMaxAverage(nums, k) {
//   let sum = 0,
//     max = 0;
//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }
//   max = sum / k;
//   for (let i = k; i < nums.length; i++) {
//     sum += nums[i] - nums[i - k];
//     max = Math.max(max, sum / k);
//   }
//   return max;
// }
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
