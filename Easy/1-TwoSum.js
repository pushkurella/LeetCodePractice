// var twoSum = function (nums, target) {
//   let indices = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         indices.push(i, j);
//         return indices;
//       }
//     }
//   }
//   return indices;
// };

// Approach 2
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = nums.lastIndexOf(target - nums[i]);
//     if (j > -1 && j !== i) {
//       return [i, j];
//     }
//   }
// };

//Approach 3
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else map.set(nums[i], i);
  }
};
console.log(twoSum([1, 2, 3, 4], 6));
