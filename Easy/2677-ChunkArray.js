// var chunk = function (arr, size) {
//   if (arr.length < 1) return arr;
//   if (arr.length <= size) return [arr];
//   const result = [];
//   let temp = [];
//   const remaining = [];

//   for (let i = 1; i <= arr.length; i++) {
//     temp.push(arr[i - 1]);
//     if (temp.length % size === 0 || size === 1) {
//       result.push(temp);
//       temp = [];
//     } else {
//       remaining.push(temp);
//     }
//   }
//   const resultArrLength = result.flat(1).length;
//   if (arr.length !== resultArrLength)
//     result.push(remaining[remaining.length - 1]);
//   return result;
// };
var chunk = function (arr, size) {
  let index = 0;
  let result = [];
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
};
// console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
