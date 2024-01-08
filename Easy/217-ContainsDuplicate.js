// var containsDuplicate = function (nums) {
//   const map = new Map();
//   let count = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else map.set(nums[i], count);
//   }
//   for (const val of map.values()) {
//     if (val >= 2) return true;
//   }
//   return false;
// };

// var containsDuplicate = function (nums) {
//   nums = nums.sort((a, b) => a - b);
//   let counter = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       counter++;
//     }
//     if (counter >= 2) {
//       return true;
//     }
//   }
//   return false;
// };
// var containsDuplicate = function (nums) {
//   const map = {};
//   let count = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]] || map[nums[i] === 0]) {
//       map[nums[i]] = map[nums[i]] + 1;
//       if (map[nums[i]] >= 2) {
//         return true;
//       }
//     } else map[nums[i]] = count;
//   }
//     for (const val of Object.values(map)) {
//       if (val >= 2) return true;
//     }
//   return false;
// };

var containsDuplicate = function (nums) {
  const map = {};
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] || map[nums[i] === 0]) {
      map[nums[i]] = map[nums[i]] + 1;
      if (map[nums[i]] >= 2) {
        return true;
      }
    } else map[nums[i]] = count;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
