/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   let i = 1;
//   const set = new Set(nums);
//   const result = [];
//   while (i < nums.length) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//     i++;
//   }
//   return result;
// };
// Another approach
var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -1 * nums[index];
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
/*
We will scan through the input array and for every number we will use its value as an index and
negate the number at the index. For example, if we encounter 4, we will negate the number at index 3.
The reason the index is not four is because the array is zero-indexed.
*/

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // 1,2,2,3,3,4,7,8
