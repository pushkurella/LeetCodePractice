/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  const highest = nums2[nums2.length - 1];
  const result = [];
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(map);
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
};
// Another approach
var intersect = function (nums1, nums2) {
  // sort the arrays
  nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};
console.log(intersect([1, 2, 2, 1], [2]));
