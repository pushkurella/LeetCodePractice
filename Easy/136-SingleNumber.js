// Time complexity is O(n)
var singleNumber = function (nums) {
  // const map = new Map();
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

var singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
    } else map.set(nums[i], 0);
  }
  return [...map.keys()][0];
};
console.log(singleNumber([1, 1, 2, 5, 2, 7, 9, 7, 15, 15]));
// Linear time complexity O(n)

var singleNumber = function (nums) {
  const map = {};
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] = map[nums[i]] + 1;
    } else map[nums[i]] = 1;
  }
  for (let [key, value] of Object.entries(map)) {
    if (value === 1) {
      result = key;
    }
  }
  return result;
};

var singleNumber = function (nums) {
  let count = 0;
  let majority = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
