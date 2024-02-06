/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);
  //   console.log("asc", nums);
  const arr = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    arr.push(nums[i + 1]);
    arr.push(nums[i]);
  }
  return arr;
};
console.log(numberGame([1, 7, 11, 17, 24, 36]));
