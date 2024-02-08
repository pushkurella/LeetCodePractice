// var rotate = function (matrix) {
//   var arr = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let arr1 = [];
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       arr1.push(matrix[j][i]);
//     }
//     arr.push(arr1);
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       matrix[i][j] = arr[i][j];
//     }
//   }
//   //   return matrix;
// };
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  console.log(matrix);
};
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
