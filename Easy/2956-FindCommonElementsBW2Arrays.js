/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const map1 = new Map();
  const map2 = new Map();
  for (const num of nums1) {
    map1.set(num, (map1.get(num) || 0) + 1);
  }
  for (const num of nums2) {
    map2.set(num, (map2.get(num) || 0) + 1);
  }
  const result = [];
  let count = 0;
  for (const num of nums1) {
    if (map2.has(num)) count++;
  }
  result.push(count);
  count = 0;
  for (const num of nums2) {
    if (map1.has(num)) count++;
  }
  result.push(count);
  return result;
};
// simple approach
var findIntersectionValues = function (a, b) {
  const seta = new Set(a);
  const setb = new Set(b);
  let countAinB = 0;
  for (const e of a) {
    if (setb.has(e)) countAinB++;
  }
  let countBinA = 0;
  for (const e of b) {
    if (seta.has(e)) countBinA++;
  }
  return [countAinB, countBinA];
};
