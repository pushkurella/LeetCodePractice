var findNumbers = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let count = 0;
    while (num % 10 > 0 || num > 0) {
      num = Math.floor(num / 10);
      console.log(num);
      count++;
    }
    if (count % 2 === 0) {
      result++;
    }
  }
  return result;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let num = nums.map((n) => n.toString());
  console.log(num);
  let res = num.filter((n) => n.length % 2 == 0);
  return res.length;
};
var findNumbers = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (num.toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};
