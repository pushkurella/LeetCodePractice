/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  function reverse(arr, left, right) {
    while (left < right) {
      //   let temp = arr[right];
      //   arr[right] = arr[left];
      //   arr[left] = temp;
      //   left++;
      //   right--;
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return arr;
  }
  nums = reverse(nums, 0, nums.length - 1);
  nums = reverse(nums, 0, k - 1);
  nums = reverse(nums, k, nums.length - 1);
  return nums;
};
console.log(rotate([1, 2, 3], 4));
