// var searchInsert = function (nums, target) {
//   let i = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//     if (nums[i] > target) {
//       if (nums[i - 1] < target) {
//         return i;
//       }
//       return i - 1 < 0 ? 0 : i - 1;
//     }
//   }
//   return i;
// };
// Better approach
var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
console.log(searchInsert([1, 3, 5, 6], 7));
