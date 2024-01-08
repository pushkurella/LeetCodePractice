// Approach 1
var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else obj[nums[i]] = 1;
  }
  let frequency = Math.max(...Object.values(obj));
  let resultArr = Object.entries(obj).find(([key, value]) =>
    value === frequency && value > nums.length / 2 ? key : ""
  );
  let result = parseInt(resultArr[0]);
  return result;
};
// Approach 2

var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = 0,
    total = 0;
  let count = 1;
  if (nums.length === 1) return nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else count = 1;
    if (total < count) {
      total = count;
      result = nums[i - 1];
    }
  }
  return result;
};

// Approach 3
var majorityElement = function (nums) {
  let candidate = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      counter++;
    } else counter--;
  }
  return candidate;
};
console.log(majorityElement([1, 1, 2, 2, 2, 4, 4, 4, 4, 4]));
// const map = { first: "1", second: "2" };
// console.log(
//   Object.keys(map).find((key) => {
//     // console.log(map[key]);
//     return map[key] === "2";
//   })
// ); // second is printed
