/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefixes = [];
  const postfixes = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixes[0] = nums[0];
    } else {
      prefixes[i] = nums[i] * prefixes[i - 1];
    }
  }
  console.log(prefixes);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfixes[nums.length - 1] = nums[nums.length - 1];
    } else {
      postfixes[i] = nums[i] * postfixes[i + 1];
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let val;
    if (prefixes[i - 1] === undefined) {
      val = 1 * postfixes[i + 1];
    } else if (postfixes[i + 1] === undefined) {
      val = prefixes[i - 1];
    } else val = prefixes[i - 1] * postfixes[i + 1];

    result.push(val);
  }
  return result;
};
