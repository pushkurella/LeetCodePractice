// var containsNearbyDuplicate = function (nums, k) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i - map.get(nums[i]) <= k) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }
//   return false;
// };
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) set.delete(nums[i - k]);
  }
};
console.log(
  containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1)
);

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
