/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;
  // both the below two statements are same
  //   return climbStairs(n - 1) + climbStairs(n - 2);
  return 2 * climbStairs(n - 2) + climbStairs(n - 3);
};
