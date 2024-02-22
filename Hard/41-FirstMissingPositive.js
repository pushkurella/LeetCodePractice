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

// Better approach
const firstMissingPositive2 = function (nums) {
  let set = new Set(),
    res = 1;
  for (let ele of nums) {
    if (ele > 0) {
      set.add(ele);
    }
  }
  while (set.has(res)) {
    ++res;
  }
  return res;
};
console.log(firstMissingPositive([2, 3]));
