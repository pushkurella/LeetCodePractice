// 74. Search a 2D Matrix
var searchMatrix = function (matrix, target) {
  let arr = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    let j = matrix[i].length - 1;
    while (matrix[i][j] >= target && j >= 0) {
      arr = matrix[i];
      j--;
    }
  }
  return arr.indexOf(target) > -1;
};
console.log(
  searchMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    5
  )
);
