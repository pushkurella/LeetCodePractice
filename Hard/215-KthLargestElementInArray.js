/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const maxQueue = new MaxPriorityQueue();
  for (const num of nums) {
    maxQueue.enqueue(num);
  }
  let result = 0;
  while (k > 0) {
    result = maxQueue.dequeue().element;
    k--;
  }
  return result;
};
// another appraoch
var findKthLargest = function (nums, k) {
  var s = new Set(nums);
  nums.sort((a, b) => b - a);
  console.log(nums);
  return nums[k - 1];
};
