/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = -1;
  // Binary search to find the target
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      index = mid;
      break;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // return if element is not present even once
  if (index === -1) {
    return [-1, -1];
  }
  let left = index,
    right = index;
  while (nums[left] === nums[index]) {
    left--;
  }
  // incrementing by 1 as we are decrementing by 1 when breaking out of loop
  left++;
  while (nums[right] === nums[index]) {
    right++;
  }
  // decrementing by 1 as we need to consider when breaking out of loop
  right--;
  return [left, right];
};
// another approach
var searchRange = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;

  // find the start
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }

  // if target doesn't exist
  if (nums[low] !== target) return [-1, -1];

  const start = low;

  // reset low and high
  (low = 0), (high = nums.length - 1);

  // find the end
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] <= target) low = mid + 1;
    else high = mid - 1;
  }
  return [start, high];
};
