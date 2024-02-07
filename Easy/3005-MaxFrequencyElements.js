/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxFrequencyElements = function (nums) {
//     const map = new Map();
//     let highestFrequencyCount=0
//     for (const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1);
//         highestFrequencyCount = Math.max(highestFrequencyCount, map.get(num))
//     }
//     let totalCount = 0;
//     for (const value of map.values()) {
//         if (value === highestFrequencyCount) {
//             totalCount += value;
//         }
//     }
//     return totalCount;

// };
// ANother approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let maxFreq = 0,
    numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
    maxFreq = Math.max(maxFreq, numsMap.get(nums[i]));
  }

  return Array.from(numsMap.entries()).reduce((acc, it) => {
    return (acc += it[1] === maxFreq ? maxFreq : 0);
  }, 0);
};
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
