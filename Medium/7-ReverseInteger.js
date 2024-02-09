/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const result = Math.abs(x).toString().split("").reverse().join("");
  if (BigInt(result) > Math.pow(2, 31) - 1) {
    return 0;
  }
  if (x < 0) {
    return 0 - Number(result);
  }
  return BigInt(result);
};
console.log(reverse(-123));
