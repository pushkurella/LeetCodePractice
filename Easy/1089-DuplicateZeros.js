/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let zeroCount = 0;
  const length = arr.length;
  const indices = [];
  for (let i = 0; i < length; i++) {
    while (zeroCount > 0) {
      arr.splice(i, 0, 9999);
      arr.pop();
      indices.push(i);
      i++;
      zeroCount--;
    }
    if (arr[i] === 0) {
      zeroCount++;
    }
  }
  for (const index of indices) {
    arr[index] = 0;
  }
};
// Another approach
var duplicateZeros = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
