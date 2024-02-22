/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var SearchRow = function (matrix, target) {
  let begin = 0;
  let last = matrix.length - 1;
  while (begin <= last) {
    let mid = Math.floor((last + begin) / 2);
    console.log(mid);
    if (
      matrix[mid][0] <= target &&
      target <= matrix[mid][matrix[0].length - 1]
    ) {
      return mid;
    } else if (matrix[mid][0] < target) begin = mid + 1;
    else if (matrix[mid][0] > target) last = mid - 1;
  }
  return -1;
};
var searchMatrix = function (matrix, target) {
  const rowIdx = SearchRow(matrix, target);
  if (rowIdx === -1) {
    return false;
  }
  let rowMatch = matrix[rowIdx];

  let start = 0;
  let end = rowMatch.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (rowMatch[middle] === target) {
      return true;
    }
    if (rowMatch[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
};
