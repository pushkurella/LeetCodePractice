var twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i, j);
        return indices;
      }
    }
  }
  return indices;
};
console.log(twoSum([1, 2, 3, 4], 6));
