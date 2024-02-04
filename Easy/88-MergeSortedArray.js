/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = 0,
    i = 0,
    j = 0;
  const nums1Temp = [...nums1];
  while (i < m && j < n) {
    if (nums1Temp[i] <= nums2[j]) {
      nums1[k++] = nums1Temp[i++];
    } else {
      nums1[k++] = nums2[j++];
    }
  }
  while (i < m) {
    nums1[k++] = nums1Temp[i++];
  }
  while (j < n) {
    nums1[k++] = nums2[j++];
  }
};

// Beats 96.68 % of users with javascript :)

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
