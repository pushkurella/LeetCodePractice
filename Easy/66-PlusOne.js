// var plusOne = function (digits) {
//   let result = BigInt(digits.reduce((a, b) => a + b, "")) + BigInt(1);
//   // console.log(result);
//   // result = +result + 1;
//   return result.toString().split("");
// };

var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 4, 8]));
