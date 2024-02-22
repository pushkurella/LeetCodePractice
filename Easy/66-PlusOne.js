// var plusOne = function (digits) {
//   let result = BigInt(digits.reduce((a, b) => a + b, "")) + BigInt(1);
//   // console.log(result);
//   // result = +result + 1;
//   return result.toString().split("");
// };

var plusOne = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i] + 1;
    if (arr[i] > 9) {
      arr[i] = 0;
    } else {
      return arr;
    }
  }
  arr.unshift(1);
  return arr;
};

console.log(plusOne([1, 2, 9, 9]));
