// Brute force approach
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const set = new Set(nums);
  const arr = [...set.values()].sort((a, b) => a - b);
  let maxCount = 0;
  let initialValue = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (initialValue === arr[i]) {
      count++;
    } else {
      initialValue = arr[i];
      count = 1;
    }
    if (maxCount < count) {
      maxCount = count;
    }
    initialValue++;
  }
  return maxCount;
};
// O(n) approach
var longestConsecutive1 = function (nums) {
  const set = new Set(nums);
  let length = 0;
  let maxLength = 0;
  // for each number find the starting sequence
  for (const num of set) {
    if (set.has(num - 1)) {
      continue; // if num - 1 is present then its not beginning of sequence
    }
    // only start with actual sequence
    while (set.has(num + length)) {
      length++;
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
};
console.log(longestConsecutive1([100, 4, 200, 1, 3, 2]));
