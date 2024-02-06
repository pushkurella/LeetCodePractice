/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let stepCount = 0;
  let boundaryCount = 0;
  for (const num of nums) {
    stepCount += num;
    stepCount === 0 && boundaryCount++;
  }
  return boundaryCount;
};
console.log(returnToBoundaryCount([3, 2, -3, -4]));
