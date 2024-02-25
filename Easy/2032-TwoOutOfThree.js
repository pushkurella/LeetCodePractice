/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const resultSet = new Set();
  for (const num of [...nums2, ...nums3]) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }
  for (const num of [...nums1, ...nums3]) {
    if (set2.has(num)) {
      resultSet.add(num);
    }
  }
  return [...resultSet.values()];
};
// another approach
var twoOutOfThree = function (nums1, nums2, nums3) {
  let ans = new Set();

  let set1 = new Set();
  for (let n of nums1) {
    set1.add(n);
  }

  let set2 = new Set();
  for (let n of nums2) {
    set2.add(n);
    if (set1.has(n)) {
      ans.add(n);
    }
  }
  for (let n of nums3)
    if (set1.has(n) || set2.has(n)) {
      ans.add(n);
    }

  return [...ans];
};
