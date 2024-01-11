/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let temp = 0;
  let resultArr = [];
  for (const num of nums) {
    temp = temp + num;
    resultArr.push(temp);
  }
  return resultArr;
};

// var runningSum = (nums, val = 0) => nums.map((x) => (val = val + x));
console.log(runningSum([1, 2, 3, 4]));
