/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const result = [];
  let i = 0;
  let j = 1;
  for (const num of nums) {
    if (num > 0) {
      result[i] = num;
      i += 2;
    } else {
      result[j] = num;
      j += 2;
    }
  }
  return result;
};
// another approach
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  // Create Two Arrays to Store Positive & Negative Nums Separately
  const positiveNums = [];
  const negativeNums = [];
  for (let num of nums) {
    if (num > 0) positiveNums.push(num);
    else negativeNums.push(num);
  }
  const newArr = [];
  for (let i = 0; i < nums.length / 2; i++) {
    newArr.push(positiveNums[i]);
    newArr.push(negativeNums[i]);
  }
  return newArr;
};
