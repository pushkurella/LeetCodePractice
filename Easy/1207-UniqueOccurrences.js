/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var uniqueOccurrences = function (arr) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else map.set(arr[i], 1);
//   }
//   console.log(map.values());

//   const valuessArr = map.values().reduce((a, b) => a + b);
//   for (let i = 0; i + 1 < valuessArr.length; i++) {
//     if (valuessArr[i] === valuessArr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
var uniqueOccurrences = function (arr) {
  const freq = new Map();
  console.log(freq.get(99));
  for (const x of arr) {
    freq.set(x, freq.get(x || 0) + 1);
  }
  const set = new Set(freq.values());
  return freq.size === set.size;
};
console.log(uniqueOccurrences([1, 1, 1, 2, 3, 2, 56]));
