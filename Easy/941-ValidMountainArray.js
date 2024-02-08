/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      isIncreasing = true;
    } else {
      isIncreasing = false;
      index = i;
      break;
    }
  }
  if (index === arr.length - 1 || index === 0) {
    return false;
  }
  for (let i = index; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return true;
};
