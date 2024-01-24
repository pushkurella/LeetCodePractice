/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = merge(nums1, nums2);
  console.log(arr);
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
function merge(arr1, arr2) {
  let i = 0,
    j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(findMedianSortedArrays([1, 3], [2, 4]));
