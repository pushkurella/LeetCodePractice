/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  if (mat.length === 1) return mat[0][0];
  let totalSum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (i === j || i + j === mat.length - 1) {
        totalSum += mat[i][j];
      }
    }
  }
  return totalSum;
};
