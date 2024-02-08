/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let wrongOrderCount = 0;
  const expectedHeights = [...heights];
  heights.sort((a, b) => a - b);
  // console.log(heights, expectedHeights)
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expectedHeights[i]) {
      wrongOrderCount++;
    }
  }
  return wrongOrderCount;
};
