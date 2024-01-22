var findErrorNums = function (nums) {
  let obj = {};
  const total = (nums.length * (nums.length + 1)) / 2;
  let falseTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj["repeated"] = nums[i];
    } else {
      obj[nums[i]] = nums[i];
    }
    falseTotal += nums[i];
  }
  const missing = total - (falseTotal - obj["repeated"]);
  return [obj["repeated"], missing];
};

console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]));
