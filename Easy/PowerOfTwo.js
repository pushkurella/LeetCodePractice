/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;
  const result = n & (n - 1);
  if (result === 0) {
    return true;
  }
  return false;
};
console.log(isPowerOfTwo(15));
