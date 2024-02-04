/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   const nums1Set = new Set(nums1);
//   const result = new Set();
//   for (const num of nums2) {
//     if (nums1Set.has(num)) result.add(num);
//   }
//   return [...result.values()];
// };
function intersect(nums1, nums2) {
  let map = new Map();
  for (let num of nums1) {
    if (!map.has(num)) map.set(num, 1);
  }

  const result = nums2.filter((n) => {
    if (map.has(n)) {
      map.delete(n);
      return true;
    } else return false;
  });
  return result;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
