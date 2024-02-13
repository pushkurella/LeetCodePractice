/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let countTwo = 0,
    countFive = 0;
  let twoTemp, fiveTemp;
  while (n > 0) {
    twoTemp = n;
    while (twoTemp % 2 === 0) {
      if (twoTemp % 2 === 0) {
        countTwo++;
        twoTemp /= 2;
      }
    }
    fiveTemp = n;
    while (fiveTemp % 5 === 0) {
      if (fiveTemp % 5 === 0) {
        countFive++;
        fiveTemp /= 5;
      }
    }
    n--;
  }
  return Math.min(countTwo, countFive);
};
// approach 2
var trailingZeroes = function (n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};
