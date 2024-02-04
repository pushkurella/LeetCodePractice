// var isPerfectSquare = function (num) {
//   let start = 0;
//   let end = num;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     let square = mid * mid;
//     if (square === num) {
//       return true;
//     } else if (square < num) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return false;
// };
// using Taylor series
var isPerfectSquare = function (num) {
  //taylor series
  // 1+3+5+7 = 16 ..
  let i = 1;
  while (num > 0) {
    num = num - i;
    i = i + 2;
  }
  return num === 0;
};
console.log(isPerfectSquare(9));
