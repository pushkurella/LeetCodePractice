// var moveZeroes = function (nums) {
//   let count = 0;
//   let resultArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//     } else {
//       resultArr.push(nums[i]);
//     }
//   }
//   while (count > 0) {
//     resultArr.push(0);
//     count--;
//   }
//   return resultArr;
// };
// var moveZeroes = function (nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   while (j < nums.length) {
//     nums[j] = 0;
//     j++;
//   }
//   return nums;
// };
// Another approach
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
