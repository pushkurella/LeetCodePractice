/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  const answer = [];
  const maxArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let max = 0;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][i]);
    }
    maxArr.push(max);
  }
  console.log(maxArr);
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) {
        temp.push(maxArr[j]);
      } else {
        temp.push(matrix[i][j]);
      }
    }
    answer.push(temp);
  }
  return answer;
};
const matrix = [
  [2, -1, 2, -1, 2],
  [1, 0, -1, 2, -1],
  [2, -1, -1, -1, 2],
  [2, 1, 2, -1, 2],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, -1],
  [2, -1, 2, 2, 0],
  [0, 1, 0, 2, 2],
  [2, 2, 0, 1, -1],
];
console.log(modifiedMatrix(matrix));
