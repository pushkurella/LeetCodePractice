/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  let sameNumberCount = 1;
  for (let i = 0; i + 1 < nums.length; i++) {
    // increment count when numbers at i, i+1 are same else
    // set it to 1
    if (nums[i] === nums[i + 1]) {
      sameNumberCount++;
    } else {
      sameNumberCount = 1;
    }
    // allow upating thrugh j index only for two counts of same number
    if (sameNumberCount <= 2) {
      nums[j++] = nums[i + 1];
    }
  }
  return j;
};
