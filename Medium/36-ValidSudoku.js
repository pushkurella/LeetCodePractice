// var isValidArray = function (arr) {
//   const map = new Map();
//   for (const num of arr) {
//     if (num && map.has(num) && num !== ".") {
//       return false;
//     } else map.set(num, num);
//   }
//   return true;
// };
// var isValidSudoku = function (board) {
//   for (let i = 0; i < board.length; i++) {
//     const rowArr = [],
//       columnArr = [];
//     for (let j = 0; j < board[0].length; j++) {
//       rowArr.push(board[i][j]);
//       columnArr.push(board[j][i]);
//       const subArr = [];
//       if (i % 3 === 0 && j % 3 === 0) {
//         for (let k = i; k < i + 3; k++) {
//           for (let l = j; l < j + 3; l++) {
//             subArr.push(board[k][l]);
//           }
//         }
//         if (!isValidArray(subArr)) {
//           return false;
//         }
//       }
//     }

//     if (!isValidArray(rowArr)) {
//       return false;
//     }
//     if (!isValidArray(columnArr)) {
//       return false;
//     }
//   }
//   return true;
// };
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      console.log(_box);
      if (_row != ".") {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != ".") {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != ".") {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
