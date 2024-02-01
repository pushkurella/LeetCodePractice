/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const resultArr = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= Math.max(...candies)) {
      resultArr.push(true);
    } else resultArr.push(false);
  }
  return resultArr;
};
// Better approach
const kidsWithCandies = (candies, extraCandies) => {
  const ret = [];
  let max = 0;
  for (const val of candies) {
    val > max && (max = val);
  }
  for (let i = 0; i < candies.length; ++i) {
    ret.push(candies[i] + extraCandies >= max);
  }
  return ret;
};
