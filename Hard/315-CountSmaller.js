/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const val = sortedNums.indexOf(nums[i]);
    result.push(val);
  }
};
console.log(countSmaller([5, 2, 6, 1]));
// another approach
