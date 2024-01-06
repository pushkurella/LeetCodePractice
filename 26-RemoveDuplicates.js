// var removeDuplicates = function (nums) {
//   let set = new Set(nums);
//   return [...set.keys()];
// };

// var removeDuplicates = function (nums) {
//   let obj = {};
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]] && obj[nums[i]] !== 0) {
//       obj[nums[i]] = nums[i];
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   return j;
// };

var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

console.log(removeDuplicates([0, 1, 2]));
