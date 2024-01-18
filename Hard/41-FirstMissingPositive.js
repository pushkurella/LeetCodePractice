/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let min = 1;

  arr.forEach((num) => {
    if (num == min) {
      min++;
    }
    if (num > min) {
      return min;
    }
  });

  return min;
};
console.log(firstMissingPositive([2, 3]));
