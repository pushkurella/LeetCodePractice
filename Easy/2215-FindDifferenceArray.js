/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
// var findDifference = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const arr1 = [],
//     arr2 = [];
//   for (const num of nums1) {
//     if (!set2.has(num) && !arr1.includes(num)) {
//       arr1.push(num);
//     }
//   }
//   for (const num of nums2) {
//     if (!set1.has(num) && !arr2.includes(num)) {
//       arr2.push(num);
//     }
//   }
//   return [arr1, arr2];
// };
// Better approach
var findDifference = function (nums1, nums2) {
  let ans1 = new Set(nums1);
  nums2.forEach((v) => {
    ans1.delete(v);
  });
  let ans2 = new Set(nums2);
  nums1.forEach((v) => {
    ans2.delete(v);
  });

  return [[...ans1], [...ans2]];
};
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
