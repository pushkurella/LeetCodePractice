/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let j = 0;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};

console.log(sortArrayByParity([1, 2, 3, 4]));
